import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  numbers: number[] = [];

  constructor() {
    for (let i = 0; i < 1000; i++) {      
     this.numbers.push(i + 1);      
    }
   }

  ngOnInit(): void {
  }

}
