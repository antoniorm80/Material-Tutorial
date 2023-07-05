import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controles',
  templateUrl: './controles.component.html',
  styleUrls: ['./controles.component.css']
})
export class ControlesComponent implements OnInit {
  notification = 2;
  showSpinner = false;

  constructor() { }

  ngOnInit(): void {
  }

  logChanges(index: any) {
    console.log(index);
  }

  loadData(){
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner= false;
    }, 5000)
  }

}
