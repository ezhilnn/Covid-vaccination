import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VacInfoComponent } from './vac-info/vac-info.component';
import { HomeComponent } from './home/home.component';
import { StepsComponent } from './steps/steps.component';
import { SearchCenterComponent } from './search-center/search-center.component';
import { FooterComponent } from './footer/footer.component';
import { ViewMoreComponent } from './view-more/view-more.component';
import { FAQsComponent } from './faqs/faqs.component';
import { ReportComponent } from './report/report.component';
import { FormsModule } from '@angular/forms';
import { CentersComponent } from './centers/centers.component';
import { DownloadComponent } from './download/download.component';
import { RegisterSignInComponent } from './register-sign-in/register-sign-in.component';
import { AdminLogComponent } from './admin-log/admin-log.component';
import { CitizenLoginComponent } from './citizen-login/citizen-login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { BookComponent } from './book/book.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VacInfoComponent,
    HomeComponent,
    StepsComponent,
    SearchCenterComponent,
    FooterComponent,
    ViewMoreComponent,
    FAQsComponent,
    ReportComponent,
    CentersComponent,
    DownloadComponent,
    RegisterSignInComponent,
    AdminLogComponent,
    CitizenLoginComponent,
    SignUpComponent,
    ProfileComponent,
    BookComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
