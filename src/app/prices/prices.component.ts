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

	private priceListLoading: boolean = true;
	private productList: any = [];
	private paginationConfig: any = {
	  itemsPerPage: 5,
	  currentPage: 1,
	  totalItems: 41
	};
	private pageChanged(page): void{
	  this.paginationConfig.currentPage = page;
	  this.getPriceList();
	}
	private defaultFilters = {
	  limit: 5,
	  page: 1
	}
	private dummyProducts = [];

  constructor(private _pricesservice: PricesServiceService, private sanitizer:DomSanitizer) {
  	for(let x = 0; x < this.defaultFilters.limit; x++){
  	  this.dummyProducts.push({});
  	}

  	this.paginationConfig.itemsPerPage = this.defaultFilters.limit;
  	this.paginationConfig.currentPage = this.defaultFilters.page;
  }

  private getPriceList(page: number = 1): void{
    this.priceListLoading = true
    this.productList = [];

    this.paginationConfig.itemsPerPage = this._pricesservice.getData().results_per_page
    this.paginationConfig.totalItems = this._pricesservice.getData().result_count
    this.productList = this._pricesservice.getData().data
    this.priceListLoading = false
  }

  transform(safeStyle) {
    return this.sanitizer.bypassSecurityTrustStyle(safeStyle);
  }

  ngOnInit() {
  	setTimeout(() => {
  		this.getPriceList(1);
  	}, 2000);
    console.log (this._pricesservice.getData())
  }

}
