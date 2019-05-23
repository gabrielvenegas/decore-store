import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatCheckboxModule
} from '@angular/material';
import { ProductsComponent } from 'app/products/products.component';
import { PlansComponent } from 'app/plans/plans.component';
import { PlansModalComponent } from 'app/plans/plans-modal/plans-moda.component';
import { NewPlanModalComponent } from 'app/plans/new-plan-modal/new-plan-modal.component';
import { NewProductModal } from 'app/products/new-product-modal/new-product-modal';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { AddPicsComponent } from 'app/products/add-pics-modal/add-pics.component';
const MODALS = [PlansModalComponent, NewPlanModalComponent, NewProductModal, AddPicsComponent];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule,
    AngularFileUploaderModule
    // MatFileUploadModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    ProductsComponent,
    PlansComponent,
    ...MODALS
  ],
  entryComponents: [...MODALS]
})

export class AdminLayoutModule { }
