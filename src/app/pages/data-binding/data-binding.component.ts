import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  text = 'Gustavo Pereira';
  imageUrl = 'https://picsum.photos/300/300';
  imageDesc = "irineu, você nao sabe e nem eu";
  buttonText = 'Cluque aqui';
  bgColor = 'green';
  fontSize = '40px';
  textInput = '';
  number = 0;
  destroy = false;

  textRed = true;
  widthImg = 600;

  constructor() { }

  ngOnInit(): void {
  }

  clicou(value: any) {
    this.text = 'Chupa';
    alert(`Garaio ${value}`);
    this.textRed = false;
  }

  clicouNoFilho(text: any) {
    console.log(text)
  }

  incrementa() {
    this.number++;
  }

  destroyComponent() {
    this.destroy = true;
  }

}
