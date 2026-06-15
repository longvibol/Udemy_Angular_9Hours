import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckinRequest } from 'src/app/model/checkinRequest';
import { CheckinserviceService } from 'src/app/service/checkinservice.service';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent implements OnInit {

  data:any;

  noOfbags!:number;

  // with interface we Just assign the properties directly!
// checkinRequest: CheckinRequest = {
//   checkIn: false,
//   numberOfBags: 0
// };


  constructor(private service:CheckinserviceService,private router:Router) { }

  ngOnInit(): void {

    this.data = this.service.reservationData;
  }

  public checkIn(){
    // this.checkinRequest.checkIn = true;
    // this.checkinRequest.numberOfBags = this.noOfbags;

    let request ={
        "id" : this.data.id,
        "checkIn":true,
        "numberOfBags" : this.noOfbags
    }

    this.service.checkIn(this.data.id, request).subscribe((res:any)=>{
      this.router.navigate(['confirm']);
      console.log(res);
    })
  }

}
