import { Component, OnInit } from '@angular/core';
import { TareasGrupoComponent } from '../tareas-grupo/tareas-grupo.component';
import { TareasHoyComponent } from '../tareas-hoy/tareas-hoy.component';
import { TareasPendientesComponent } from '../tareas-pendientes/tareas-pendientes.component';

@Component({
  selector: 'inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
