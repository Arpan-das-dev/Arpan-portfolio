import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {

  currentTheme: string = 'dark'; // used to sync with dropdown

  switchTheme(event: Event): void {
    const selectedTheme = (event.target as HTMLSelectElement).value;
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(`${selectedTheme}-theme`);
    sessionStorage.setItem('theme', selectedTheme);
    this.currentTheme = selectedTheme;
  }

  ngOnInit(): void {
    const savedTheme = sessionStorage.getItem('theme') || 'dark';

    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(`${savedTheme}-theme`);
    this.currentTheme = savedTheme;
    setTimeout(() => {
      const selectEl = document.querySelector('.theme-switch') as HTMLSelectElement;
      if (selectEl) selectEl.value = savedTheme;
    }, 0); 
  }
}
