import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() btntext: string = 'Clique';
  @Input() btntype: string = '';
  @Output() click = new EventEmitter;
  textFilho = 'Clicou no Filho';

  constructor() { }

  ngOnInit(): void {
  }

  clicou() {
    this.click.emit(this.textFilho);

  }

}
