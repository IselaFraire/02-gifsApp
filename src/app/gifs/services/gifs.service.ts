import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SerchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})

export class GifsService {

  private apiKey     : string = 'PHtrNKm2av5NNzI6TWMYfnLB80JjqbyE';
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  private _historial : string[] = [];

  public resultados: Gif[] = [];

  get historial(){
    return [...this._historial];
  }

  constructor(private http: HttpClient ){

    //Devolver a su tipo original, si es vacio regresa arreglo vacio
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];

    this.resultados = JSON.parse(localStorage.getItem('resultado')! ) || [];
  }

  buscarGifs(query: string = ''){
    //Convertir a minuscula el string
    query = query.trim().toLocaleLowerCase();
  
    //Si no existe en el arreglo insertalo
    if(!this._historial.includes(query)){
      //insertar al inicio
      this._historial.unshift(query);
      //Cortar el tamaño del arreglo a 10
      this._historial = this._historial.splice(0,10);

      //Grabar en el local storage del navegador
      localStorage.setItem('historial', JSON.stringify(this._historial));

    }

    const params = new HttpParams()
          .set('api_key', this.apiKey)
          .set('limit', '10')
          .set('q', query);

    this.http.get<SerchGifsResponse>(`${ this.servicioUrl }/search`, { params } )
      .subscribe(resp  =>{
        console.log(resp.data);
        this.resultados = resp.data;
        localStorage.setItem('resultado', JSON.stringify(this.resultados));
      });
  }
}
