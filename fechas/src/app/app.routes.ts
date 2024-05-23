import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './features/componentes/inicio/inicio.component';
import { FechasComponent } from './features/componentes/fechas/fechas.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: "inicio", component:InicioComponent},
    {path: "fechas", component:FechasComponent},
    { path: 'fechas/listar', component: FechasComponent }   //pendiente 
];
//Provisional hacia abajo
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }