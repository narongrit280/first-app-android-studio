import { Value } from './report/value-get';
import { RootObject } from './report/report-get';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  constructor(private http: HttpClient) {}
  getReport(): Observable<RootObject[]> {
    return this.http.get<RootObject[]>('https://smof.moe.go.th/bud-api/api/BudReportList/type?type=1');
  }
}
