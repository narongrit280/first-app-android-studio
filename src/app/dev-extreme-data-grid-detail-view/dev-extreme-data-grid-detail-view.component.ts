import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dev-extreme-data-grid-detail-view',
  templateUrl: './dev-extreme-data-grid-detail-view.component.html',
  styleUrls: ['./dev-extreme-data-grid-detail-view.component.css']
})
export class DevExtremeDataGridDetailViewComponent implements OnInit {
  priorities: string[];
valuelist: []=[] ;
  constructor(private http: HttpClient,) { 
    this.priorities = [
      'ใช้งาน',
      'ไม่ใช้งาน',
      
    ];
  }
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
