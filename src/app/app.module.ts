import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { AnnouncementComponent } from './components/features/article-management/announcement/announcement.component';
import { MultiCommunityManagementComponent } from './components/features/others/multi-community-management/multi-community-management.component';
import { FacilityBorrowingComponent } from './components/features/community-service/facility-borrowing/facility-borrowing.component';
import { AccessRecordComponent } from './components/features/community-service/access-record/access-record.component';
import { LaundryServiceComponent } from './components/features/community-service/laundry-service/laundry-service.component';
import { ParkingSpaceComponent } from './components/features/community-service/parking-space/parking-space.component';
import { PaymentItemsComponent } from './components/features/community-service/payment-items/payment-items.component';
import { FeaturesComponent } from './components/features/features.component';

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
    
    FeaturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
