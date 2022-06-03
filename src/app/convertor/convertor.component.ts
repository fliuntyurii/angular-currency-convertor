import { Component, Input, OnInit } from "@angular/core";
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'convertor',
  templateUrl: './convertor.component.html',
  styleUrls: ['./convertor.component.css']
})

export class Convertor implements OnInit {
  currency: string = 'USD'
  exchangedCurrency: string = 'USD';
  
  inputCurrent: number | null = null;
  outputCurrent: number | null = null;

  @Input()
  currencyValues: any = {};
  
  ngDoCheck(): void {
    if(!!this.inputCurrent) {
      this.outputCurrent = +(this.inputCurrent * this.currencyValues[this.exchangedCurrency]).toFixed(2);
    }
  }

  constructor (private ApiService: ApiService) { }

  ngOnInit(currency: string = 'USD'): void {
    this.ApiService.getCurrency(currency)
      .subscribe((res: any) => {
        this.currencyValues = res.rates;
      })
  }

  setCurrency(e: any): void {
    this.currency = e.value;
    this.ngOnInit(e.value);
  }

  setExchanged(e: any): void {
    this.exchangedCurrency = e.value;
    if(!!this.inputCurrent) {
      this.outputCurrent = +(this.inputCurrent * this.currencyValues[this.exchangedCurrency]).toFixed(2);
    }
  }

  setInputValue(e: any): void {
    this.inputCurrent = e.value;
    this.outputCurrent = +(e.value * this.currencyValues[this.exchangedCurrency]).toFixed(2);
  }

  setOutputValue(e: any): void {
    this.outputCurrent = e.value;
    this.inputCurrent = +(e.value * ( 1 / this.currencyValues[this.exchangedCurrency])).toFixed(2);
  }
};