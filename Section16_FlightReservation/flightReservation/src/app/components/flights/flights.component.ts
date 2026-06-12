import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FlightService } from 'src/app/services/flight.service';

export interface Flight {
  id: number;
  flightNumber: string;
  operatingAirlines: string;
  departureCity: string;
  arrivalCity: string;
  dateOfDeparture: string;
  estimatedDepartureTime: string;
}

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit, OnDestroy {
  allFlights: Flight[] = []; // Holds the full list from API
  pagedFlights: Flight[] = []; // Holds only the flights for the current page
  
  isLoading: boolean = true;
  errorMessage: string | null = null;
  
  // Pagination State
  currentPage: number = 1;
  pageSize: number = 5; // Adjust items per page here
  totalPages: number = 1;
  totalItems: number = 0;

  private subscription: Subscription = new Subscription();

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
    this.loadAllFlights();
  }

  loadAllFlights(): void {
    this.isLoading = true;
    this.errorMessage = null;

    const flightSub = this.flightService.getAllFlight().subscribe({
      next: (data: Flight[]) => {
        this.allFlights = data || [];
        this.totalItems = this.allFlights.length;
        this.currentPage = 1; // Reset to page 1 on fresh load
        this.updatePagination();
        this.isLoading = false;
      },
      error: (error: any) => {
        console.error('Error fetching flights:', error);
        this.errorMessage = 'Failed to load flight schedules. Please try again later.';
        this.isLoading = false;
      }
    });

    this.subscription.add(flightSub);
  }

  updatePagination(): void {
    this.totalPages = Math.ceil(this.totalItems / this.pageSize) || 1;
    
    // Boundary checks
    if (this.currentPage > this.totalPages) this.currentPage = this.totalPages;
    if (this.currentPage < 1) this.currentPage = 1;

    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    
    this.pagedFlights = this.allFlights.slice(startIndex, endIndex);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
      this.currentPage = page;
      this.updatePagination();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  // Getters for template logic calculations
  get startItemIndex(): number {
    return this.totalItems === 0 ? 0 : (this.currentPage - 1) * this.pageSize + 1;
  }

  get endItemIndex(): number {
    const currentEnd = this.currentPage * this.pageSize;
    return currentEnd > this.totalItems ? this.totalItems : currentEnd;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}