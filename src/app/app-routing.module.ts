import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

import { ListEmployeeComponent } from './list-employee/list-employee.component';
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
import { MessageTemplateAddComponent } from './message-template-add/message-template-add.component';
import { MessageTemplateComponent } from './message-template/message-template.component';
import { MessagetemplateeditComponent } from './messagetemplateedit/messagetemplateedit.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'add' },
  // { path: 'add', component: AddEmployeeComponent },
  // { path: 'edit/:id', component: EditEmployeeComponent },
  // { path: 'list', component:ListEmployeeComponent }
  { path:'', pathMatch: 'full', redirectTo: 'vehicle-status'},
  { path:'vehicle-status', component: VehicleStatusComponent},
  { path:'vehicle-category', component: VehicleCategoryComponent},
  { path:'user-role', component: UserRoleComponent},
  { path:'booking-status', component: BookingStatusComponent},
  { path:'booking-cancel', component: BookingCancelComponent },
  { path:'star-ratings', component: StarRatingsComponent},
  { path:'star-option', component: OptionRatingsComponent},
  { path:'banner', component: BannerComponent},
  { path:'messagetemplate', component: MessageTemplateComponent},
  { path:'add-vehicle', component:VehicleStatusAddComponent},
  { path:'add-vehicle-category', component: VehicleCategoryAddComponent},
  { path:'add-user-role', component: UserRoleAddComponent},
  { path:'add-booking-status', component: BookingStatusAddComponent},
  { path:'add-booking-cancel', component: BookingCancelAddComponent},
  { path:'add-star-ratings', component: StarRatingsAddComponent},
  { path:'add-star-option', component: OptionRatingsAddComponent},
  { path:'add-banner', component: BannerAddComponent},
  { path:'add-message', component: MessageTemplateAddComponent},
  { path:'editmessage/:id', component: MessagetemplateeditComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }