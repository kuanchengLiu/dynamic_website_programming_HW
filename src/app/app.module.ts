import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { IntroductionComponent } from './components/features/community-introduction/introduction/introduction.component';
import { LoginComponent } from './components/features/login/login.component';
import { EscapeRoutesComponent } from './components/features/community-introduction/escape-routes/escape-routes.component';
import { HeaderModule } from './components/header/header.module';
import { CommunityMapComponent } from './components/features/community-introduction/community-map/community-map.component';
import { HomeComponent } from './components/home/home.component';

import { AnnouncementComponent } from './components/features/article-management/announcement/announcement.component';
import { MultiCommunityManagementComponent } from './components/features/others/multi-community-management/multi-community-management.component';
import { FacilityBorrowingComponent } from './components/features/community-service/facility-borrowing/facility-borrowing.component';
import { AccessRecordComponent } from './components/features/community-service/access-record/access-record.component';
import { LaundryServiceComponent } from './components/features/community-service/laundry-service/laundry-service.component';
import { ParkingSpaceComponent } from './components/features/community-service/parking-space/parking-space.component';
import { PaymentItemsComponent } from './components/features/community-service/payment-items/payment-items.component';
import { HttpClientModule } from '@angular/common/http';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { FormGroup, ReactiveFormsModule, NgControl, FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { PersonalComponent } from './components/features/personal/personal.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,

    AnnouncementComponent,

    MultiCommunityManagementComponent,

    FacilityBorrowingComponent,

    AccessRecordComponent,

    LaundryServiceComponent,

    ParkingSpaceComponent,

    PaymentItemsComponent,


    IntroductionComponent,
    LoginComponent,
    EscapeRoutesComponent,
    CommunityMapComponent,
    HomeComponent,
    SignUpComponent,
    PersonalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
