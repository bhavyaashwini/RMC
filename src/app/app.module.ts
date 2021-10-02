
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Student } from './student.model';
import { ApiService } from './shared/api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule} from '@angular/material/button';
import{ MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatBadgeModule} from '@angular/material/badge';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import { MatRadioModule} from '@angular/material/radio';
import { MatDatepickerModule} from '@angular/material/datepicker';
import{ MatChipsModule} from '@angular/material/chips';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatCardModule} from '@angular/material/card';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';

import {MatDialogModule} from '@angular/material/dialog';
import '@angular/compiler';
import { VehicleStatusComponent } from './vehicle-status/vehicle-status.component';
import { VehicleCategoryComponent } from './vehicle-category/vehicle-category.component';
import { UserRoleComponent } from './user-role/user-role.component';
import { BookingStatusComponent } from './booking-status/booking-status.component';
import { BookingCancelComponent } from './booking-cancel/booking-cancel.component';
import { StarRatingsComponent } from './star-ratings/star-ratings.component';
import { OptionRatingsComponent } from './option-ratings/option-ratings.component';
import { VehicleStatusAddComponent } from './vehicle-status-add/vehicle-status-add.component';
import { VehicleCategoryAddComponent } from './vehicle-category-add/vehicle-category-add.component';
import { UserRoleAddComponent } from './user-role-add/user-role-add.component';
import { BookingStatusAddComponent } from './booking-status-add/booking-status-add.component';
import { BookingCancelAddComponent } from './booking-cancel-add/booking-cancel-add.component';
import { StarRatingsAddComponent } from './star-ratings-add/star-ratings-add.component';
import { OptionRatingsAddComponent } from './option-ratings-add/option-ratings-add.component';
import { BannerComponent } from './banner/banner.component';
import { BannerAddComponent } from './banner-add/banner-add.component';
import { MessageTemplateComponent } from './message-template/message-template.component';
import { MessageTemplateAddComponent } from './message-template-add/message-template-add.component';
import { Authentication } from './apitoken/authentication';
import { DatePipe } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MessagetemplateeditComponent } from './messagetemplateedit/messagetemplateedit.component';
import { OptionratingeditComponent } from './optionratingedit/optionratingedit.component';
import { BannereditComponent } from './banneredit/banneredit.component';
import { StarratingeditComponent } from './starratingedit/starratingedit.component';
import { BookingcanceleditComponent } from './bookingcanceledit/bookingcanceledit.component';
import { BookingstatuseditComponent } from './bookingstatusedit/bookingstatusedit.component';
import { UserroleeditComponent } from './userroleedit/userroleedit.component';
import { VehiclecategoryeditComponent } from './vehiclecategoryedit/vehiclecategoryedit.component';
import { VehiclestatuseditComponent } from './vehiclestatusedit/vehiclestatusedit.component';
import { SettingsComponent } from './settings/settings.component';
import { SettingsaddComponent } from './settingsadd/settingsadd.component';
import { SettingseditComponent } from './settingsedit/settingsedit.component';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    ListEmployeeComponent,
    EditEmployeeComponent,
    VehicleStatusComponent,
    VehicleCategoryComponent,
    UserRoleComponent,
    BookingStatusComponent,
    BookingCancelComponent,
    StarRatingsComponent,
    OptionRatingsComponent,
    VehicleStatusAddComponent,
    VehicleCategoryAddComponent,
    UserRoleAddComponent,
    BookingStatusAddComponent,
    BookingCancelAddComponent,
    StarRatingsAddComponent,
    OptionRatingsAddComponent,
    BannerComponent,
    BannerAddComponent,
    MessageTemplateComponent,
    MessageTemplateAddComponent,
    MessagetemplateeditComponent,
    OptionratingeditComponent,
    BannereditComponent,
    StarratingeditComponent,
    BookingcanceleditComponent,
    BookingstatuseditComponent,
    UserroleeditComponent,
    VehiclecategoryeditComponent,
    VehiclestatuseditComponent,
    SettingsComponent,
    SettingsaddComponent,
    SettingseditComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    BrowserModule,
    BrowserAnimationsModule,
    // MatTableDataSource,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatBadgeModule,
    MatListModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    // MatNativeDateModule,
    MatChipsModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    NgxMatSelectSearchModule
    
  ],
  providers: [
    DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass: Authentication, multi: true },ApiService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
