import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { Router } from '@angular/router';
import { computed } from '@angular/core';
import { NgIf } from '@angular/common';
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, NgIf, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('arpan-portfolio');
  constructor(private router: Router) {}

  showNavbar = computed(() => this.router.url !== '/login');
}
