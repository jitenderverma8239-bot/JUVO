import { Component, OnInit } from '@angular/core';
import { Navbar } from './shared/components/navbar/navbar';
import { Footer } from './shared/components/footer/footer';
import { Hero } from './pages/hero/hero';
import { Contact } from './pages/contact/contact';
import { Work } from './pages/work/work';
import { Lab } from './pages/lab/lab';
import { About } from './pages/about/about';

@Component({
  selector: 'app-root',
  imports: [Navbar, Footer, Hero,Work, Lab, About, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  ngOnInit(): void {
    const splash = document.getElementById('juvo-splash');
    if (!splash) return;

    window.setTimeout(() => {
      splash.classList.add('is-leaving');
      window.setTimeout(() => splash.remove(), 280);
    }, 500);
  }
}
