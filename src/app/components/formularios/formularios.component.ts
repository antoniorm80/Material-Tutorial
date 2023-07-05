import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {
  selectedValue: string = '';
  selectedValueGroup: string = '';
  selectedValueGroupMultiple: string = '';
  options: string[] = ['Angular', 'React', 'Vue', 'Ionic', 'React Native', 'Angular Material', 'Material UI'];
  objectOptions = [
    { name: 'Angular' },
    { name: 'Angular Material' },
    { name: 'React' },
    { name: 'React Native' },
    { name: 'Vue' },
  ]
  minDate = new Date();
  maxDate = new Date(2023,6,15);
  dateFilter = (date: any)  => {
    const day = date?.getDay();
    return day != 0 && day != 6;
  }

  myControl = new FormControl();
  filterOptions!: Observable<string[]>;

  displayFn(subject: any) {
    return subject ? subject.name : undefined;
  }

  constructor() { }

  ngOnInit(): void {
    this.filterOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    )
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => 
      option.toLowerCase().includes(filterValue)
      );
  }
  
 

  // openDialog() {
  //   this.dialog.open();
  // }


}
