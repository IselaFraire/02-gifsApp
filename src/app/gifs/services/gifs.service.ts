import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey   : string = 'PHtrNKm2av5NNzI6TWMYfnLB80JjqbyE';
  private _historial: string[] = [];

  //Cambiar any por su tipo correspondiente
  public resultados: any[] = [];

  get historial(){
    return [...this._historial];
  }

  constructor(private http: HttpClient ){}

  buscarGifs(query: string = ''){
    //Convertir a minuscula el string
    query = query.trim().toLocaleLowerCase();
  
    //Si no existe en el arreglo insertalo
    if(!this._historial.includes(query)){
      //insertar al inicio
      this._historial.unshift(query);
      //Cortar el tamaño del arreglo a 10
      this._historial = this._historial.splice(0,10);

    }

    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=PHtrNKm2av5NNzI6TWMYfnLB80JjqbyE&q=${ query }&limit=10`)
      .subscribe((resp: any) =>{
        console.log(resp.data);
        this.resultados = resp.data;
      });
  }
}
