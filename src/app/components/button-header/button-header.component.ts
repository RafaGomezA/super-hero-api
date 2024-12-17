import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-header',
  templateUrl: './button-header.component.html',
  styleUrls: ['./button-header.component.css']
})
export class ButtonHeaderComponent implements OnInit {

  @Input() label: string = '';
  @Input() route: string = ''; //me viene la ruta del headerComponent en el boton { label: 'Contacto', route: '/aaaaaaa' },

  constructor() { }

  ngOnInit(): void {
  }



}
