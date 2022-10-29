
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent implements OnInit {
  valuelist: any ;
  constructor(private http: HttpClient,) {}

  ngOnInit(): void {
    this.http
      .get<any>(
        'https://smof.moe.go.th/bud-api/api/BudReportList/type?type=1'
      )
      .subscribe((response) => {
        console.log('response', response);
        this.valuelist = response.Value
        
      });
    
  }
}
