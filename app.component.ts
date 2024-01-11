import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'This string is interpolated';
  clientName = 'wacks';
  appliedCSS ='green';
  notAppliedCSS = false;
  myColor ='red';

  clickCount = 0;
  clickMe(){
    this.clickCount++;
  }
showData($event: any){
  console.log('Button is clicked');
  if ($event){
    console.log($event.targer);
    console.log($event.target.value);
  }
}
}
