import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { PricesServiceService } from '../prices-service.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css'],
  providers: [PricesServiceService]
})

@Pipe({name: 'safeStyle'})

export class PricesComponent implements OnInit {

	private productList: any = [];
	private priceListLoading: boolean = false;
	private paginationConfig: any = {
	  itemsPerPage: 5,
	  currentPage: 1,
	  totalItems: 0
	};

  constructor(private _pricesservice: PricesServiceService, private sanitizer:DomSanitizer) { }

  private getPriceList(page: number = 1): void{
    this.priceListLoading = true
    this.productList = [];

    this.productList = this._pricesservice.getData()
  }

  transform(safeStyle) {
    return this.sanitizer.bypassSecurityTrustStyle(safeStyle);
  }

  ngOnInit() {
  	this.getPriceList();
    console.log (this._pricesservice.getData())
  }

}
