import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/features/login/login.component';
import { IntroductionComponent } from './components/features/community-introduction/introduction/introduction.component';
import { EscapeRoutesComponent } from './components/features/community-introduction/escape-routes/escape-routes.component';
import { CommunityMapComponent } from './components/features/community-introduction/community-map/community-map.component';
import { AnnouncementComponent } from './components/features/article-management/announcement/announcement.component';
import { MultiCommunityManagementComponent } from './components/features/others/multi-community-management/multi-community-management.component';
import { FacilityBorrowingComponent } from './components/features/community-service/facility-borrowing/facility-borrowing.component';
import { AccessRecordComponent } from './components/features/community-service/access-record/access-record.component';
import { LaundryServiceComponent } from './components/features/community-service/laundry-service/laundry-service.component';
import { ParkingSpaceComponent } from './components/features/community-service/parking-space/parking-space.component';
import { PaymentItemsComponent } from './components/features/community-service/payment-items/payment-items.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { PersonalComponent } from './components/features/personal/personal.component';








const routes: Routes = [
  { path: 'person', component: PersonalComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'intrduction', component: IntroductionComponent },
  { path: 'escapeRoute', component: EscapeRoutesComponent },
  { path: 'communityMap', component: CommunityMapComponent },
  { path: 'Announcement', component: AnnouncementComponent },
  { path: 'other', component: MultiCommunityManagementComponent },
  { path: 'PaymentItems', component: PaymentItemsComponent },
  { path: 'ParkingSpace', component: ParkingSpaceComponent },
  { path: 'LaundryService', component: LaundryServiceComponent },
  { path: 'AccessRecord', component: AccessRecordComponent },
  { path: 'FacilityBorrowing', component: FacilityBorrowingComponent },
  { path: 'SignUp', component: SignUpComponent},
  { path: '', redirectTo: '/intrduction', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
