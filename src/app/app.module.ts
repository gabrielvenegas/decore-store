import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageModule } from 'src/pages/page.module';
import { RouterModule, Routes } from '@angular/router'
import { HomePage } from 'src/pages/home/home.page';
import { CartPage } from 'src/pages/cart/cart.page';
import { CheckoutPage } from 'src/pages/checkout/checkout.page';
import { StorePage } from 'src/pages/store/store.page';
import { ProductDetailPage } from 'src/pages/product-detail/product-detail.page';
import { ProfilePage } from 'src/pages/profile/profile.page';
import { PlanService } from 'src/services/plan.service';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'home', component: HomePage },
  { path: 'cart', component: CartPage },
  { path: 'checkout', component: CheckoutPage },
  { path: 'store', component: StorePage },
  { path: 'store/product-detail', component: ProductDetailPage },
  { path: 'profile', component: ProfilePage },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'home'
  }
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {
      anchorScrolling: 'enabled',
    }),
    PageModule,
  ],
  providers: [PlanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
