import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DeudasComponent } from './deudas.component';

@NgModule({
  declarations: [DeudasComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClient
  ]
})
export class DeudasModule { }