import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewMoreComponent } from './view-more/view-more.component';
import { FAQsComponent } from './faqs/faqs.component';
import { ReportComponent } from './report/report.component';
import { CentersComponent } from './centers/centers.component';
import { DownloadComponent } from './download/download.component';
import { RegisterSignInComponent } from './register-sign-in/register-sign-in.component';
import { AdminLogComponent } from './admin-log/admin-log.component';
import { CitizenLoginComponent } from './citizen-login/citizen-login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { BookComponent } from './book/book.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },{
    path:'more',
    component:ViewMoreComponent
  },{
    path:'FAQ',
    component:FAQsComponent
  },{
    path:'report',
    component:ReportComponent
  },{
    path:'centers',
    component:CentersComponent
  },{
    path:'download',
    component:DownloadComponent
  },{
    path:'register-signIn',
    component:RegisterSignInComponent
  },{
    path:'admin-log',
    component:AdminLogComponent
  },
  {
    path:'citizen-login',
    component:CitizenLoginComponent
  },{
    path:'sign-up',
    component:SignUpComponent
  },{
    path:'profile',
    component:ProfileComponent
  },{
    path:'book/:id',
    component:BookComponent
  },{
    path:'admin',
    component:AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
