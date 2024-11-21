import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  isHomePage: boolean = false;
  pageTitle: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
    // Aggiorna la proprietà in base alla rotta corrente
    this.router.events.subscribe(() => {
      const currentRoute = this.router.url;

      // Controlla se siamo sulla homepage
      this.isHomePage = currentRoute === '/';

      // Imposta il titolo dinamico in base alla rotta
      switch (currentRoute) {
        case '/about':
          this.pageTitle = 'About Us';
          break;
        case '/menu':
          this.pageTitle = 'Our Menu';
          break;
        case '/services':
          this.pageTitle = 'Services'
          break;
        case '/booking':
          this.pageTitle = 'Booking'
          break;
        case '/team':
          this.pageTitle = 'Our team'
          break;
        case '/testimonials':
          this.pageTitle = 'Testimonial'
          break;
        case '/contact':
          this.pageTitle = 'Contact Us';
          break;
        default:
          this.pageTitle = '';
      }
    });
  }
}
