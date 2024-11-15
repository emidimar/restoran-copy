// import { Component, HostListener, Renderer2, ElementRef, ViewChild } from '@angular/core';

// @Component({
//   selector: 'app-navbar',
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.css']
// })
// export class NavbarComponent {
//   constructor(private renderer: Renderer2) { }
//   @ViewChild('navbar') navbar: ElementRef | undefined;
// 

//   @HostListener('window:scroll', [])
//   onWindowScroll() {
//     if (this.navbar) {
//       if (window.scrollY > 50) {
//         this.renderer.addClass(this.navbar.nativeElement, 'fullNav');
//         this.renderer.removeClass(this.navbar.nativeElement, 'trasparentNav');
//       } else {
//         this.renderer.addClass(this.navbar.nativeElement, 'trasparentNav');
//         this.renderer.removeClass(this.navbar.nativeElement, 'fullNav');
//       }
//     }
//   }


// }


import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isScrolled = false;
  menuOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    this.isScrolled = scrollTop > 50;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
