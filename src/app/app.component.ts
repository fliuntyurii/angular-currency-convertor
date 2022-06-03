import { Component, OnInit } from '@angular/core';
import { ApiService } from './shared/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'my-app';
  currentValues: any = [];

  date = new Date();
  day = String(this.date.getDate()).length < 2 ? `0${this.date.getDate()}` : this.date.getDate();
  month = String(this.date.getMonth() + 1).length < 2 ? `0${this.date.getMonth() + 1}` : this.date.getDate() + 1;
  currentDate = `${this.day}.${this.month}.${this.date.getFullYear()}`

  constructor (private ApiService: ApiService) { }

  ngOnInit(): void {
    this.ApiService.getCurrency('uah')
      .subscribe((res: any) => {
        this.currentValues = res.rates;
      })
  }
}
