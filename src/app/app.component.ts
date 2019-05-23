import { Component, Inject, HostListener } from '@angular/core';
import { NgAnimateScrollService } from 'ng-animate-scroll';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fade',
      [
        state('void', style({ opacity: 0 })),
        transition(':enter', [animate(300)]),
        transition(':leave', [animate(500)]),
      ]
    )]
})
export class AppComponent {
  title = 'app';
  showLeftIcons = false;
  constructor(private animateScrollService: NgAnimateScrollService, @Inject(DOCUMENT) document) {

  }

  scroll(id: string) {
    this.animateScrollService.scrollToElement(id, 500);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(_e) {
    if (window.pageYOffset > 550) {
      let element = document.getElementById('navbar');
      element.classList.add('sticky');
      element.classList.add('fade-in');
      this.showLeftIcons = true;
    } else {
      let element = document.getElementById('navbar');
      element.classList.remove('sticky');
      element.classList.remove('fade-in');
      this.showLeftIcons = false;
    }
  }
}