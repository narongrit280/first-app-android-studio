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
import { DevExtremeModule } from 'devextreme-angular';




@NgModule({
  declarations: [
    AppComponent,
    FrontendComponent,
    HowcanComponent,
    ReponsivePageComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReportModule,
    RouterModule,
    DevExtremeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
