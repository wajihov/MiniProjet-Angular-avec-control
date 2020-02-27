import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {

  constructor() { }

  /* tableAlphabet: any=[abcdefghijklmnopqrstuvwxyz]; */
  /* let a: any =[for(_ of Array(i=26))String.fromCharCode(++i+70)].join`` */

  ngOnInit() {
  }

}
