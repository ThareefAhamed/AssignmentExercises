import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClickCountComponent } from './click-count/click-count.component';
import { MobileNumberValidateComponent } from './mobile-number-validate/mobile-number-validate.component';
import { NameCheckingComponent } from './name-checking/name-checking.component';
import { StudentObjectComponent } from './student-object/student-object.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickCountComponent,
    MobileNumberValidateComponent,
    NameCheckingComponent,
    StudentObjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
