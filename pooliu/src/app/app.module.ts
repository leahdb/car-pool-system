import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { VerifyComponent } from './verify/verify.component';
import { CreateTripComponent } from './create-trip/create-trip.component';
import { MapModalComponent } from './map-modal/map-modal.component';
import { MatIconModule } from '@angular/material/icon';
import { MatIconRegistry } from '@angular/material/icon';
import {
  CalendarModule,
  DatePickerModule,
  TimePickerModule,
  DateRangePickerModule,
  DateTimePickerModule,
} from '@syncfusion/ej2-angular-calendars';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HomeNavigationComponent } from './home-navigation/home-navigation.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MatMenuModule } from '@angular/material/menu';
import { DateTimePickerComponent } from './date-time-picker/date-time-picker.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Sign-up', component: SignUpComponent },
  { path: 'Verify', component: VerifyComponent },
  { path: 'Create-trip', component: CreateTripComponent },
  { path: 'nav', component: NavigationComponent },
  // { path: 'Course/:id', component: CourseComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    HomeNavigationComponent,
    LoginComponent,
    SignUpComponent,
    VerifyComponent,
    CreateTripComponent,
    MapModalComponent,
    DateTimePickerComponent,
  ],
  imports: [
    CalendarModule, DatePickerModule, TimePickerModule, DateRangePickerModule, DateTimePickerModule,
    MatMenuModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    //FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [MatIconRegistry],
  bootstrap: [AppComponent],
})
export class AppModule {}
