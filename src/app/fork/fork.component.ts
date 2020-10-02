import {Component, Renderer2} from '@angular/core';

@Component({
  selector: 'app-fork',
  templateUrl: './fork.component.html',
  styleUrls: ['./fork.component.sass']
})
export class ForkComponent {
  renderer: Renderer2;

  constructor(renderer: Renderer2) {
    this.renderer = renderer;
  }

  public onIntersection({target, visible}: { target: Element; visible: boolean }): void {
    this.renderer.addClass(target, visible ? 'focus-in' : 'focus-out');
    this.renderer.removeClass(target, visible ? 'focus-out' : 'focus-in');
  }
}
