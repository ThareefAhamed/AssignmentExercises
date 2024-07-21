import { Component } from '@angular/core';

@Component({
  selector: 'app-name-checking',
  templateUrl: './name-checking.component.html',
  styleUrls: ['./name-checking.component.css']
})
export class NameCheckingComponent {
  names: string = '';
  namesArr:string[] = [];
  name:string="";
  result:string="If Present or Not..?"
  storeNames(){
    this.namesArr = this.names.toLowerCase().split(",");
    console.log(this.namesArr);
  }
  checkName(){
    for(let i=0; i<this.namesArr.length;i++){
      if(this.namesArr.indexOf(this.name.toLowerCase()) >= 0){
        this.result = `${this.name} is Present..!!`;
      }else{
        this.result = `${this.name} is Not Present..!!`;
      }
    }
  }
}
