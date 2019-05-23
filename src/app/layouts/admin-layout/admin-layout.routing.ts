import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { TypographyComponent } from '../../typography/typography.component';

import {
    AuthGuardService as AuthGuard
} from '../../auth/auth-guard.service';
import { ProductsComponent } from 'app/products/products.component';
import { PlansComponent } from 'app/plans/plans.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], },
    { path: 'products', component: ProductsComponent },
    { path: 'plans', component: PlansComponent },
    { path: 'users', component: TypographyComponent },
    { path: 'reports', component: TypographyComponent },
];
