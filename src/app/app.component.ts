import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'mySite';
 
  
  isHomePageView = true; // État initial
  isMobile = false; // État initial
  isNavBarVisible: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobile = window.innerWidth <= 768;
  }

  toggleView() {
    this.isNavBarVisible = !this.isNavBarVisible;
  }
  
}
