import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  NgZone,
  OnDestroy,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit, OnDestroy {
  @ViewChild('preloader') preloader!: ElementRef<HTMLElement>;
  @ViewChild('preloaderBar') preloaderBar!: ElementRef<HTMLElement>;
  @ViewChild('cursorDot') cursorDot!: ElementRef<HTMLElement>;
  @ViewChild('cursorRing') cursorRing!: ElementRef<HTMLElement>;

  count = 0;

  private mouse = { x: 0, y: 0 };
  private ring = { x: 0, y: 0 };
  private rafId = 0;
  private observer?: IntersectionObserver;
  private reduceMotion = false;

  constructor(private zone: NgZone) {
    this.reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
  }

  ngAfterViewInit(): void {
    this.runPreloader();
    this.setupCursor();
    // Defer reveal wiring until child views are painted.
    setTimeout(() => this.setupReveals(), 0);
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.rafId);
    this.observer?.disconnect();
  }

  /* --------------------------------------------------- Preloader counter */
  private runPreloader(): void {
    const bar = this.preloaderBar?.nativeElement;
    const el = this.preloader?.nativeElement;
    const step = () => {
      const inc = Math.max(1, Math.round((100 - this.count) / 8));
      this.count = Math.min(100, this.count + inc);
      if (bar) bar.style.width = this.count + '%';
      if (this.count < 100) {
        setTimeout(step, 90);
      } else {
        setTimeout(() => el?.classList.add('is-done'), 350);
      }
    };
    setTimeout(step, 250);
  }

  /* ------------------------------------------------------ Custom cursor */
  private setupCursor(): void {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const dot = this.cursorDot?.nativeElement;
    const ring = this.cursorRing?.nativeElement;
    if (!dot || !ring) return;

    this.zone.runOutsideAngular(() => {
      const heroFrame = document.querySelector<HTMLElement>('.ea-hero__portrait img');
      let px = 0;
      let py = 0;
      const loop = () => {
        this.ring.x += (this.mouse.x - this.ring.x) * 0.16;
        this.ring.y += (this.mouse.y - this.ring.y) * 0.16;
        dot.style.transform = `translate(${this.mouse.x}px, ${this.mouse.y}px) translate(-50%, -50%)`;
        ring.style.transform = `translate(${this.ring.x}px, ${this.ring.y}px) translate(-50%, -50%)`;

        if (heroFrame && !this.reduceMotion) {
          const tx = (this.mouse.x / window.innerWidth - 0.5) * 10;
          const ty = (this.mouse.y / window.innerHeight - 0.5) * 10;
          px += (tx - px) * 0.06;
          py += (ty - py) * 0.06;
          heroFrame.style.transform = `translate(${px}px, ${py}px)`;
        }
        this.rafId = requestAnimationFrame(loop);
      };
      loop();

      document.addEventListener('mouseover', (e) => {
        const t = e.target as HTMLElement;
        if (t.closest('a, button, .ea-fwork, .ea-card, .ea-chip, [data-cursor]')) {
          ring.classList.add('is-hover');
        }
      });
      document.addEventListener('mouseout', (e) => {
        const t = e.target as HTMLElement;
        if (t.closest('a, button, .ea-fwork, .ea-card, .ea-chip, [data-cursor]')) {
          ring.classList.remove('is-hover');
        }
      });
    });
  }

  @HostListener('document:mousemove', ['$event'])
  onMove(e: MouseEvent): void {
    this.mouse.x = e.clientX;
    this.mouse.y = e.clientY;
  }

  /* ----------------------------------------------------- Scroll reveals */
  private setupReveals(): void {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>('.reveal, .reveal-line')
    );
    if (this.reduceMotion || !('IntersectionObserver' in window)) {
      nodes.forEach((n) => n.classList.add('in-view'));
      return;
    }
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            this.observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' }
    );
    nodes.forEach((n) => this.observer!.observe(n));
  }
}
