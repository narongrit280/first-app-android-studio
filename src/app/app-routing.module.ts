import { ReportComponent } from './report/report/report.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HowcanComponent } from './howcan/howcan.component';
import { ReponsivePageComponent } from './reponsive-page/reponsive-page.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"/",
    pathMatch:"full"
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },{
    path:'howcan',
    component: HowcanComponent
  },
  {
    path: 'report',
    component: ReportComponent
  }
  ,{path: 'responsive',
  component: ReponsivePageComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
