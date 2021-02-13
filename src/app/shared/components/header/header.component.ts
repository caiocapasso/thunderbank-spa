import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input('title') title: string | undefined;

  constructor(){
    setTimeout(() => {
      console.log('mudou o valor...')
      this.title = "THUUUUUNDER - BAAAAAAAAANK! HooooOOOOOoooo"
    }, 3000)
  }

}
