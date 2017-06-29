import { Component, OnInit } from '@angular/core';
import { PricesServiceService } from '../prices-service.service';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css'],
  providers: [PricesServiceService]
})
export class PricesComponent implements OnInit {

  constructor(private _pricesservice: PricesServiceService) { }

  ngOnInit() {
    console.log (this._pricesservice.getData())
  }

}
