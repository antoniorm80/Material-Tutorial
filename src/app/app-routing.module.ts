import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { FormulariosComponent } from './components/formularios/formularios.component';
import { ModalesComponent } from './components/modales/modales.component';
import { TablasComponent } from './components/tablas/tablas.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ControlesComponent } from './components/controles/controles.component';
import { TablaComponent } from './schematics/tabla/tabla.component';
import { DireccionComponent } from './schematics/direccion/direccion.component';
import { NavegarComponent } from './schematics/navegar/navegar.component';
import { TableroComponent } from './schematics/tablero/tablero.component';
import { DragarComponent } from './schematics/dragar/dragar.component';
import { RamasComponent } from './schematics/ramas/ramas.component';
import { ArbolComponent } from './schematics/arbol/arbol.component';
import { JerarquiaComponent } from './schematics/jerarquia/jerarquia.component';

const routes: Routes = [
  // { path: '', redirectTo: '/login', pathMatch:'full', title:'Login-App'},
  { path:'controles', component: ControlesComponent, title:'Controles-App'},
  { path:'formularios', component: FormulariosComponent, title:'Formularios-App'},
  { path:'layout', component: LayoutComponent, title:'Layout-App'},
  { path:'modales', component: ModalesComponent, title:'Modales-App'},
  { path:'navigation', component: NavigationComponent, title:'Navigation-App'},
  { path:'tablas', component: TablasComponent, title:'Tablas-App'},
  { path:'direccion', component: DireccionComponent, title:'Tabla-App'},
  { path:'navegar', component: NavegarComponent, title:'Tabla-App'},
  { path:'tabla', component: TablaComponent, title:'Tabla-App'},
  { path:'tablero', component: TableroComponent, title:'Tabla-App'},
  { path:'ramas', component: RamasComponent, title:'Tabla-App'},
  { path:'dragar', component: DragarComponent, title:'Tabla-App'},
  { path:'arbol', component: ArbolComponent, title:'Arbol-App'},
  { path:'jerarquia', component: JerarquiaComponent, title:'Jerarquía-App'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
