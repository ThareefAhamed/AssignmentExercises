import { Component } from '@angular/core';

@Component({
  selector: 'app-student-object',
  templateUrl: './student-object.component.html',
  styleUrls: ['./student-object.component.css']
})
export class StudentObjectComponent {
  name:string='';
  age:string='';
  rollNo:string='';
  address:string='';
  mobileNo:string='';
  onSubmit(){
    const student: Student = {
      name: this.name,
      age: this.age,
      rollNo: this.rollNo,
      address: this.address,
      mobileNo: this.mobileNo
    };
    console.log(student);
  }
}

export interface Student{
  name:string,
  age:string,
  rollNo:string,
  address:string,
  mobileNo:string
}

