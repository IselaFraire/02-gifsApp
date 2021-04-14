import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { GifsBusquedaComponent } from './gifs-busqueda/gifs-busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';



@NgModule({
  declarations: [GifsPageComponent, GifsBusquedaComponent, ResultadosComponent],
  imports: [
    CommonModule
  ],
  exports: [
    GifsPageComponent,
    GifsBusquedaComponent
  ]
})
export class GifsModule { }
