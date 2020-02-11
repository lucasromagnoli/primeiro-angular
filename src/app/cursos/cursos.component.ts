import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: string[] = ['Java 8', 'Spring Framework', 'Spring Cloud', 'Spring Batch', 'Angular 2+']
  constructor() { }

  ngOnInit(): void {
  }

}
