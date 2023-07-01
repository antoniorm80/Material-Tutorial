import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider'
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'


const MaterialUI = [
  MatDividerModule,
  MatButtonModule,
  MatIconModule
]

@NgModule({
  imports: [MaterialUI],
  exports: [MaterialUI]
})

export class MaterialModule { }
