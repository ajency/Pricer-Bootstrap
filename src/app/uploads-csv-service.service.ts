import { Injectable } from '@angular/core';

@Injectable()
export class UploadsCsvServiceService {

  constructor() { }

  getData() {
    return {
      "success": true,
      "result_count": 18,
      "results_per_page": 5,
      "page": 1,
      "data": [
        {
          "id": 62,
          "file_name": "All_products.xls",
          "status": "Processed",
          "no_of_listing": 9,
          "no_of_rows": 5,
          "created": "Jun 27, 2017, 1:46 PM"
        },
        {
          "id": 61,
          "file_name": "All_products.xls",
          "status": "Processed",
          "no_of_listing": 9,
          "no_of_rows": 5,
          "created": "Jun 27, 2017, 10:32 AM"
        },
        {
          "id": 60,
          "file_name": "voilations_mrp.xls.xlsx",
          "status": "Processed",
          "no_of_listing": 3,
          "no_of_rows": 1,
          "created": "Jun 26, 2017, 1:30 PM"
        },
        {
          "id": 58,
          "file_name": "check prices.xls.xlsx",
          "status": "Processed",
          "no_of_listing": 2,
          "no_of_rows": 2,
          "created": "Jun 26, 2017, 1:24 PM"
        },
        {
          "id": 54,
          "file_name": "amazon.xls",
          "status": "Processed",
          "no_of_listing": 4,
          "no_of_rows": 4,
          "created": "Jun 16, 2017, 2:29 PM"
        }
      ],
      "query_data": {
        "limit": "5",
        "page": "1",
        "direction": "desc",
        "sort": "created"
      }
    }
  }
}
