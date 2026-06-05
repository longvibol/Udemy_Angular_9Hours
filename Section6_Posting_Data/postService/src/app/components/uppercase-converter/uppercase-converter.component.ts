import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UppercaseConverterService } from 'src/app/services/uppercase-converter.service';

@Component({
  selector: 'app-uppercase-converter',
  templateUrl: './uppercase-converter.component.html',
  styleUrls: ['./uppercase-converter.component.css']
})
export class UppercaseConverterComponent implements OnInit {

  public result: string = '';
  public my_message: string = '';

  constructor(private _service: UppercaseConverterService) { }

  ngOnInit(): void {
  }

  public convert(data: { message: string }): void {
    this._service.convertToUpperCase(data).subscribe({
      next: (res: string) => {
        this.result = res;
      },
      error: (err: HttpErrorResponse) => {
        console.error(err);
      }
    });
  }

}
