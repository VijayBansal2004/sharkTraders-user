import { Component, OnInit, OnDestroy, Inject, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FrontHeaderComponent } from './front-header/front-header.component';
import { FrontFooterComponent } from './front-footer/front-footer.component';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-front',
  standalone: true,
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css'],
  imports: [RouterOutlet, FrontHeaderComponent, FrontFooterComponent],
})
export class FrontComponent implements OnInit, OnDestroy {
  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  private cssFiles: string[] = [
    'assets/front/css/bootstrap.css',
    // 'assets/front/css/bootstrap-extend.css',
    'assets/front/css/dashlite.css',
    'assets/front/css/master_style.css',
    'assets/front/css/custom.css',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
    'https://sharktechnologies.net/wp-content/themes/bern/assets/fonts/flaticon-bern.css?ver=1743412849',
  ];
  private jsFiles: string[] = [
    'assets/front/js/jquery.js',
    'assets/front/js/bootstrap.js',
    'assets/front/js/script.js',
    'https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.11.8/umd/popper.min.js',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js',
  ];

  ngOnInit(): void {
    if (
      this.document.head.querySelector('link.user-layout-css') ||
      this.document.body.querySelector('script.user-layout-js')
    ) {
      return;
    }
    this.loadCSS();
    this.loadJS();
  }

  ngOnDestroy(): void {
    this.removeCSS();
    this.removeJS();
  }

  private loadCSS(): void {
    this.cssFiles.forEach((href) => {
      const link = this.renderer.createElement('link');
      this.renderer.setAttribute(link, 'rel', 'stylesheet');
      this.renderer.setAttribute(link, 'href', href);
      this.renderer.setAttribute(link, 'class', 'user-layout-css');
      this.renderer.appendChild(this.document.head, link);
    });
  }

  private loadJS(): void {
    this.jsFiles.forEach((src) => {
      const script = this.renderer.createElement('script');
      this.renderer.setAttribute(script, 'src', src);
      this.renderer.setAttribute(script, 'type', 'text/javascript');
      this.renderer.setAttribute(script, 'defer', 'true');
      this.renderer.setAttribute(script, 'class', 'user-layout-js');
      this.renderer.appendChild(this.document.body, script);
    });
  }

  private removeCSS(): void {
    const links = this.document.querySelectorAll('link.user-layout-css');
    links.forEach((link) =>
      this.renderer.removeChild(this.document.head, link)
    );
  }

  private removeJS(): void {
    const scripts = this.document.querySelectorAll('script.user-layout-js');
    scripts.forEach((script) =>
      this.renderer.removeChild(this.document.body, script)
    );
  }
}
