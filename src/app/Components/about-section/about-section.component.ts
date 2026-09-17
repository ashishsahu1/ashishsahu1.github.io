import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css'],
})
export class AboutSectionComponent implements OnInit, OnDestroy {
  roles = [
    'Software Developer',
    'GenAI Engineer',
    'Full-Stack Developer',
    'AI Solutions Architect',
  ];
  role = this.roles[0];

  // Background-removed cutout. Falls back to the framed photo, then an older asset.
  portrait = 'assets/profile-withoutBackground.png';

  imgFallback(event: Event): void {
    const img = event.target as HTMLImageElement;
    if (img.src.includes('profile-withoutBackground')) {
      img.src = 'assets/profile.png';
    } else if (!img.src.endsWith('dpp2.jpeg')) {
      img.src = 'assets/dpp2.jpeg';
    }
  }

  marquee = [
    'GenAI',
    'LLMs',
    'RAG',
    'AI Agents',
    'Angular',
    'TypeScript',
    'Node.js',
    'Azure',
    'MCP',
    'Micro-Frontend',
    'System Design',
  ];

  private idx = 0;
  private timer?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.idx = (this.idx + 1) % this.roles.length;
      this.role = this.roles[this.idx];
    }, 2200);
  }

  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
  }
}
