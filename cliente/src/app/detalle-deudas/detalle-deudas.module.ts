import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DetalleDeudasComponent } from './detalle-deudas.component';

@NgModule({
  declarations: [DetalleDeudasComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClient
  ]
})
export class DetalleDeudasModule { }