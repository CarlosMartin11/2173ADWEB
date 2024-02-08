import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {interval} from 'rxjs';
import {map} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-pipe';
  presentDate = new Date();
  time$: Observable<Date>;
  price : number = 20000; 
  Fruits = ["Apple", "Orange", "Grapes", "Mango", "Kiwi", "Pomogranate"];
  decimalNum1 : number = 8.7589623;
  decimalNum2 : number = 5.43;  
  ngOnInit(){

  }


date: object = {
  name: 'Carlos', age:21, food: 'Pancit Canton',
  language: [
    {lname: '35', level: 'Wiard'},
    {lname: 'Python', level: 'Master'},
    {lname: 'Cobal', level: 'Beginner'},


  ]
}



constructor() {
  this.time$ = interval(1000).pipe (
    map (() => new Date())
  );

}
}
