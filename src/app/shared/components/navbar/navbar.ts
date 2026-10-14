import { Component, HostListener } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-navbar',
  templateUrl: './navbar.html',
})
export class Navbar {
  active = 'home';
  menuOpen = false;
  private scrollFrame = 0;

  @HostListener('window:scroll')
  updateActiveSection(): void {
    if (this.scrollFrame) return;
    this.scrollFrame = window.requestAnimationFrame(() => {
      this.scrollFrame = 0;
      const marker = window.scrollY + 120;
      for (const id of ['home', 'work', 'lab', 'about', 'contact']) {
        const section = document.getElementById(id);
        if (section && marker >= section.offsetTop && marker < section.offsetTop + section.offsetHeight) {
          this.active = id;
          return;
        }
      }
      if (window.scrollY < 100) this.active = 'home';
    });
  }

  navigateTo(id: string): void {
    this.active = id;
    this.menuOpen = false;
  }
}
