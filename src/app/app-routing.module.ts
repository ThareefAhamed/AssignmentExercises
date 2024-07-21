import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClickCountComponent } from './click-count/click-count.component';
import { MobileNumberValidateComponent } from './mobile-number-validate/mobile-number-validate.component';
import { NameCheckingComponent } from './name-checking/name-checking.component';
import { StudentObjectComponent } from './student-object/student-object.component';

const routes: Routes = [
  {
    path:"buttonclick",
    component:ClickCountComponent,
  },
  {
    path:"mobilenovalidation",
    component:MobileNumberValidateComponent,
  },
  {
    path:"namechecking",
    component:NameCheckingComponent,
  },
  {
    path:"student",
    component:StudentObjectComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
