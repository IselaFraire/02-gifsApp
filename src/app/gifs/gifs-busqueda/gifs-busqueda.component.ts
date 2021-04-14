import { Component, ElementRef, ViewChild} from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-gifs-busqueda',
  templateUrl: './gifs-busqueda.component.html',
  styles: [
  ]
})
export class GifsBusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;
  
  constructor(private gifsService: GifsService){}
  
  buscar() {
    const valor  = this.txtBuscar.nativeElement.value;

    //Validacion que no permite ingresar valores vacios o un valor con espacios
    if(valor.trim().length === 0){
      return;
    }

    this.gifsService.buscarGifs(valor);

    this.txtBuscar.nativeElement.value = '';
  }

}
