import { ChangeDetectorRef, Component, ElementRef, inject, Renderer2, RendererStyleFlags2, ViewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-about',
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  iconGitHub = faGithub
  iconLeft = faArrowLeft
  iconWhatsapp = faWhatsapp
  iconEmail = faEnvelope

  whatsapp:string = "https://wa.me/559191396547/?text="

  display:string = "none"

  @ViewChild ('mirror') mirror!: ElementRef
  @ViewChild ('ulSlide') ulSlide!: ElementRef
  constructor ( private renderer: Renderer2) {}
  private cdr = inject(ChangeDetectorRef)

  stopSlide() {
    this.renderer.setStyle(this.mirror.nativeElement, 'display', this.display, RendererStyleFlags2.Important)
    this.renderer.setStyle(this.ulSlide.nativeElement, 'animation', 'none')
    this.renderer.setStyle(this.mirror.nativeElement, 'animation', 'none')
    this.renderer.setStyle(this.ulSlide.nativeElement, 'transform', 'translateX(0)')
    this.cdr.detectChanges()

    setTimeout (() => {
    this.renderer.removeStyle(this.mirror.nativeElement, 'display')
    this.renderer.removeStyle(this.ulSlide.nativeElement, 'animation')
    this.renderer.removeStyle(this.mirror.nativeElement, 'animation')
    this.renderer.removeStyle(this.ulSlide.nativeElement, 'transform')
    }, 6000)
  }


}
