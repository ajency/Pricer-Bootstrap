import { Component, OnInit } from '@angular/core';
import { UploadsCsvServiceService } from '../uploads-csv-service.service';

@Component({
  selector: 'app-uploads-csv',
  templateUrl: './uploads-csv.component.html',
  styleUrls: ['./uploads-csv.component.css'],
  providers: [UploadsCsvServiceService]
})
export class UploadsCsvComponent implements OnInit {

  constructor(private  _uploadcsvservice: UploadsCsvServiceService) { }

  ngOnInit() {
    console.log(this._uploadcsvservice.getData());
  }

}
