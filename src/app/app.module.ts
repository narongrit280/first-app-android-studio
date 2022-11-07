import { ReportModule } from './report/report.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontendComponent } from './frontend/frontend.component';
import { HowcanComponent } from './howcan/howcan.component';
import { RouterModule } from '@angular/router';
import { ReponsivePageComponent } from './reponsive-page/reponsive-page.component';
import {
  DevExtremeModule,
  DxDataGridModule,
  DxButtonModule,
} from 'devextreme-angular';
import { DevExtremeDataGridListviewComponent } from './dev-extreme-data-grid-listview/dev-extreme-data-grid-listview.component';
import { DevExtremeDataGridDetailViewComponent } from './dev-extreme-data-grid-detail-view/dev-extreme-data-grid-detail-view.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontendComponent,
    HowcanComponent,
    ReponsivePageComponent,
    DevExtremeDataGridListviewComponent,
    DevExtremeDataGridDetailViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReportModule,
    RouterModule,
    DevExtremeModule,
    DxButtonModule,
    DxDataGridModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
