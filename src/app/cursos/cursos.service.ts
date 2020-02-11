import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos():string[] {
    return ['Java 8', 'Spring Framework', 'Spring Cloud', 'Spring Batch', 'Angular 2+', 'Flutter'];
  }
}
