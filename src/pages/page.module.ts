import { NgModule } from '@angular/core';
import { HomePage } from './home/home.page';
import { ComponentModule } from 'src/components/component.module';
import { CartPage } from './cart/cart.page';
import { CheckoutPage } from './checkout/checkout.page';
import { StorePage } from './store/store.page';
import { ProductDetailPage } from './product-detail/product-detail.page';
import { ProfilePage } from './profile/profile.page';
@NgModule({
    declarations: [
        HomePage,
        CartPage,
        CheckoutPage,
        StorePage,
        ProductDetailPage,
        ProfilePage
    ],
    imports: [
        ComponentModule,
    ],
    providers: []
})
export class PageModule { } 