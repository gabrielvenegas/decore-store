import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { MatButtonModule, MatRippleModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatTooltipModule } from "@angular/material";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { LoginService } from "./login.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    imports: [
        FormsModule,
        HttpClientModule,
        MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule
    ],
    declarations: [
        LoginComponent
    ],
    providers: [LoginService],
    exports: [LoginComponent]
})

export class LoginModule { }