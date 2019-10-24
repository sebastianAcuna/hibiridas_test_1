import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { InicioComponent } from './inicio/inicio.component';
import { TareasPendientesComponent } from './tareas-pendientes/tareas-pendientes.component';
import { TareasHoyComponent } from './tareas-hoy/tareas-hoy.component';
import { TareasGrupoComponent } from './tareas-grupo/tareas-grupo.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraSuperiorComponent,
    InicioComponent,
    TareasPendientesComponent,
    TareasHoyComponent,
    TareasGrupoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
