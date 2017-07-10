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

	public priceListLoading: boolean = true;
	public productList: any = [];
	public paginationConfig: any = {
	  itemsPerPage: 0,
	  currentPage: 0,
	  totalItems: 0
	};

	private defaultFilters = {
	 	limit: 20, 
	 	page: 1, 
	 	sort: 'created_at', 
	 	direction: 'desc'
	}

	private filters: any;

	public dummyProducts = [];

  constructor(private _pricesservice: PricesServiceService, private sanitizer:DomSanitizer) {
  	for(let x = 0; x < this.defaultFilters.limit; x++){
  	  this.dummyProducts.push({});
  	}

  	this.paginationConfig.itemsPerPage = this.defaultFilters.limit;
  	this.paginationConfig.currentPage = this.defaultFilters.page;

		this.filters = Object.assign({},this.defaultFilters);
  }

  private getPriceList(page: number = 1): void{
    this.priceListLoading = true
    this.productList = [];

		this.paginationConfig.currentPage = page;
		this.filters.page = page;

    // this.productList = this._pricesservice.getData().data
		this._pricesservice.sendRequest('https://repricer2.ajency.in/api/api/products/all?','get',this.filters,{"authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjQsImV4cCI6MTUwMDAzNjQzMX0.2jz91408VisTh4TBEAh0XQejO1peaSOx2tVytA5CZAw"})
		.subscribe((res) => {
			console.log(res)
			this.paginationConfig.itemsPerPage = res.results_per_page
    	this.paginationConfig.totalItems = res.result_count

			this.productList = res.data;

			this.priceListLoading = false;
		},(err) =>{
			console.log(err)
		})
  };

	pageChanged(page): void{
		console.log('page',page)
		this.getPriceList(page);
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
