import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // Create object  
  public personForm!:FormGroup;

  ngOnInit(){
    this.personForm = new FormGroup({
      firstName: new FormControl("Vibol",[Validators.required,Validators.minLength(3), Validators.maxLength(10)]),
      lastName: new FormControl(),
      email: new FormControl(),
      address: new FormGroup({
        street: new FormControl(),
        city: new FormControl(),
        country: new FormControl()
      }),
      gender: new FormControl()
    });
  }

  onSubmit(){
    console.log(this.personForm.valid);
  }

}
