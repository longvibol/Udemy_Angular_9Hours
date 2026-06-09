import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public firstName: string = 'vibol';
  public lastName: string='long';
  public email!: string; 
  public gender: string='male';
  public street!: string;
  public city!: string;
  public country!: string;

  countries = ['India', 'USA', 'UK', 'Germany', 'France'];

  public onSubmit(data: any) {
    console.log('Form submitted!', data);
  }
}
