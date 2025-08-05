import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero implements OnInit {

  userName: string | null = sessionStorage.getItem('username');
  titles: string[] = ['Full-Stack Developer', 'Backend Engineer', 'Frontend Engineer', 'Java Programmer'];
  currentTitle: string = '';

  private titleIndex: number = 0;
  private charIndex: number = 0;
  private isDeleting: boolean = false;

  ngOnInit(): void {
    this.startTypingEffect();
  }

  private startTypingEffect(): void {
    const currentText = this.titles[this.titleIndex];
    
    if (this.isDeleting) {
      this.currentTitle = currentText.substring(0, this.charIndex--);
    } else {
      this.currentTitle = currentText.substring(0, this.charIndex++);
    }

    let typingDelay = this.isDeleting ? 60 : 100;

    if (!this.isDeleting && this.charIndex === currentText.length) {
      typingDelay = 1200;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.titleIndex = (this.titleIndex + 1) % this.titles.length;
      typingDelay = 400;
    }

    setTimeout(() => this.startTypingEffect(), typingDelay);
  }
}
