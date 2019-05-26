import { Component, OnInit } from '@angular/core';

import { ServiciosService } from '../service/servicios.service';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-deudas',
  templateUrl: './deudas.component.html',
  styleUrls: ['./deudas.component.css']
})
export class DeudasComponent implements OnInit {

  pers: Persona;
  data: Array<Persona>;

  constructor(private Servicios: ServiciosService) { }

  ngOnInit() {
    this.get();
    this.pers = new Persona();
  }

  get() {
    this.Servicios.get('pers').subscribe(
        response => {
            this.data = response as Array<Persona>;
        },
        error => {
            console.log(error);
        }
    );
}

post(){
    this.Servicios.post('pers',this.pers).subscribe(
      response => {
        this.get();
      },
      error => {
        console.log(error);
      }
      
);
}

}
