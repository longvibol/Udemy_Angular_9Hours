import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckinserviceService } from 'src/app/service/checkinservice.service';

@Component({
  selector: 'app-startcheckin',
  templateUrl: './startcheckin.component.html',
  styleUrls: ['./startcheckin.component.css']
})
export class StartcheckinComponent implements OnInit {

  reservationId!:number;

  constructor(private service:CheckinserviceService, private router:Router) { }

  ngOnInit(): void {
  }

  public onClick(){

    this.service.getReservation(this.reservationId).subscribe((res: any) => {
      this.service.reservationData = res; // Saves data globally in service
      this.router.navigate(['checkIn']);  // Navigates to the next page
    }, (error) => {
    console.error("Error fetching reservation:", error);
  });
}

}
