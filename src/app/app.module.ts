import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LayoutComponent } from './components/layout/layout.component';
import { FormulariosComponent } from './components/formularios/formularios.component';
import { ControlesComponent } from './components/controles/controles.component';
import { ModalesComponent } from './components/modales/modales.component';
import { TablasComponent } from './components/tablas/tablas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LayoutComponent,
    FormulariosComponent,
    ControlesComponent,
    ModalesComponent,
    TablasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
