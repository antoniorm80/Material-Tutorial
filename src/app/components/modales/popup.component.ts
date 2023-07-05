import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
    selector: 'app-popup',
    template: `
    <h2 mat-dialog-title style="color: green;">Sessión TimeOut and Sending Data</h2>
    <mat-dialog-content>Hi <strong>{{data.name}}.</strong> You will be logged out due to inactivity</mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button mat-dialog-close="true"> Keep me logged In</button>
      <button mat-button mat-dialog-close="false"> Log Out</button>
    </mat-dialog-actions>
    `
  })
  export class PopupComponent { 
  
    constructor(@Inject(MAT_DIALOG_DATA) public data: any){}

  }