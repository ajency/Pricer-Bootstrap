import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { UploadsCsvComponent } from './uploads-csv/uploads-csv.component';
import { PricesComponent } from './prices/prices.component';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'upload-csv', component: UploadsCsvComponent },
  { path: 'prices',      component: PricesComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    UploadsCsvComponent,
    PricesComponent
  ],
  imports: [
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
