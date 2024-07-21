import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-number-validate',
  templateUrl: './mobile-number-validate.component.html',
  styleUrls: ['./mobile-number-validate.component.css']
})
export class MobileNumberValidateComponent {
  mobileNumber: string = "";
  isValid: string = "Valid or Invalid..??  ";
  validate() {
    let res = document.getElementById("result");
    if (res) {
      res.style.color = "red";
    }
    this.mobileNumber = this.mobileNumber.toString();
    if (this.mobileNumber.length == 10) {
      this.isValid = "Vaild Mobile Number";
    } else {
      this.isValid = "Invalid Mobile Number";
    }
  }
}
