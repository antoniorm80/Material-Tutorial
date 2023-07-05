import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


/*Components*/
import { NavigationComponent } from './components/navigation/navigation.component';
import { LayoutComponent } from './components/layout/layout.component';
import { FormulariosComponent } from './components/formularios/formularios.component';
import { ControlesComponent } from './components/controles/controles.component';
import { ModalesComponent } from './components/modales/modales.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { NavegarComponent } from './schematics/navegar/navegar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DireccionComponent } from './schematics/direccion/direccion.component';
import { TablaComponent } from './schematics/tabla/tabla.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { TableroComponent } from './schematics/tablero/tablero.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTreeModule } from '@angular/material/tree';
import { DragarComponent } from './schematics/dragar/dragar.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PopupComponent } from './components/modales/popup.component';
import { SnackedBarComponent } from './components/modales/snackedbar.component';



@NgModule({
  declarations: [
    AppComponent,    
    NavigationComponent,
    LayoutComponent,
    FormulariosComponent,
    ControlesComponent,
    ModalesComponent,
    NavegarComponent,
    DireccionComponent,
    TablaComponent,
    TableroComponent,
    DragarComponent,
    PopupComponent,
    SnackedBarComponent
  ],
   imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatMenuModule,
    MatTreeModule,
    DragDropModule,
    ScrollingModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
