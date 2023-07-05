import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PopupComponent } from './popup.component';
import { SnackedBarComponent } from './snackedbar.component'
import { dateInputsHaveChanged } from '@angular/material/datepicker/datepicker-input-base';

@Component({
  selector: 'app-modales',
  templateUrl: './modales.component.html',
  styleUrls: ['./modales.component.css']
})
export class ModalesComponent implements OnInit {

  constructor(private snackBar: MatSnackBar, private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  
  openSnackBar(message: any, action: any) {
    let snackBarRef = this.snackBar.open(message, action, {duration: 2000});

    snackBarRef.afterDismissed().subscribe(() =>{
      alert("The snackbar was dismissed");
      console.log("The snackbar was dismissed")
    })

    snackBarRef.onAction().subscribe(() =>{
      alert("The snackbar action was triggered");
      console.log("The snackbar action was triggered")
    })

  }

  openCustomSnackBar() {
    this.snackBar.openFromComponent(SnackedBarComponent, {duration: 2000})
  }

  openDialog(){
    let dialgoRef = this.dialog.open(PopupComponent, {data: { name: 'Antonio Rivera'}});
    
    dialgoRef.afterClosed().subscribe(result => {
      alert(`Dialog result ${result}`);
      console.log(`Dialog result ${result}`);
    })
  }

}
