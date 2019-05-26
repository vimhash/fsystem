import { Component, OnInit } from '@angular/core';

import { ServiciosService } from '../service/servicios.service';
import { Persona } from '../models/persona';
import { Deudas } from '../models/deudas';

@Component({
  selector: 'app-detalle-deudas',
  templateUrl: './detalle-deudas.component.html',
  styleUrls: ['./detalle-deudas.component.css']
})
export class DetalleDeudasComponent implements OnInit {

  pers: Persona;
  deud: Deudas;
  dataPers: Array<Persona>;
  dataDeud: Array<Deudas>;


  constructor(private Servicios: ServiciosService) { }

  ngOnInit() {
    this.getPers();
    this.pers = new Persona();
  }

  getPers() {
    this.Servicios.get('pers').subscribe(
        response => {
          this.dataPers = response as Array<Persona>;
          console.log(this.dataPers);
        },
        error => {
            console.log(error);
        }
    );
  }

}
