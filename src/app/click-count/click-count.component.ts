import { Component } from '@angular/core';

@Component({
  selector: 'app-click-count',
  templateUrl: './click-count.component.html',
  styleUrls: ['./click-count.component.css']
})
export class ClickCountComponent {
  count:number = 0;
  onClick(){
    this.count++;
  }
  onReset(){
    this.count = 0;
  }
}
