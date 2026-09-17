import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  showBurgerMenu = false;
  scrolled = false;

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 40;
  }

  toggleMenu(): void {
    this.showBurgerMenu = !this.showBurgerMenu;
    document.body.classList.toggle('is-locked', this.showBurgerMenu);
  }

  closeMenu(): void {
    this.showBurgerMenu = false;
    document.body.classList.remove('is-locked');
  }

  toggleTheme(): void {
    const root = document.documentElement;
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch (e) {
      /* storage unavailable — theme still applies for this session */
    }
  }
}
