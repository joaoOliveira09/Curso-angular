import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
   name: string = 'Joao Vitor'
   age : number = 19
   job : string = 'estudante'
   hobbies = ["Correr", "Jogar Futebol", "Jogar",] 
   car = {
    name: 'Q5',
    year: 2020,
    marca: "audi"
   }
  constructor() { }

  ngOnInit(): void {
  }

}
