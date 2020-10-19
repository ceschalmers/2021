import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.sass']
})
export class LandingComponent {
  ratio1: number
  ratio2: number
  ratio3: number

  constructor() {
    if (!navigator.maxTouchPoints) {
      this.ratio1 = 0.75
      this.ratio2 = 0.45
      this.ratio3 = 0.25
    } else {
      this.ratio1 = 1
      this.ratio2 = 1
      this.ratio3 = 1
    }
    console.log(!!navigator.maxTouchPoints)
  }
}
