import {Component, Renderer2} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent {
  renderer: Renderer2;

  constructor(renderer: Renderer2) {
    this.renderer = renderer;
  }

  public onIntersection({target, visible}: { target: Element; visible: boolean }): void {
    this.renderer.addClass(target, visible ? 'focus-in' : 'focus-out');
    this.renderer.removeClass(target, visible ? 'focus-out' : 'focus-in');
  }
}
