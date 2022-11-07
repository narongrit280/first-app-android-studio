import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DevExtremeModule,DxDataGridComponent } from 'devextreme-angular';

@Component({
  selector: 'app-dev-extreme-data-grid-listview',
  templateUrl: './dev-extreme-data-grid-listview.component.html',
  styleUrls: ['./dev-extreme-data-grid-listview.component.css']
})
export class DevExtremeDataGridListviewComponent implements OnInit {

  valuelist: []=[] ;
  constructor(private http: HttpClient,) { }

  ngOnInit(): void {
    this.http
    .get<any>(
      'https://moe-smartoffice2.demotoday.net/bud-api/api/BudMdmBudgetType'
    )
    .subscribe((response) => {
      console.log('response', response);
      this.valuelist = response.Value
      
    });
  
  }

}
