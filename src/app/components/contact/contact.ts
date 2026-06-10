import { ChangeDetectorRef, Component, ElementRef, inject, Renderer2, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  iconGitHub = faGithub
  iconEmail = faEnvelope
  iconLeft = faArrowLeft

  email:string = "mailto:flay.melo5@gmail.com"
  regexCel = /^(\d{2})9\d{8}$/

  @ViewChild('nameError') nameError!:ElementRef
  @ViewChild('numError') numError!:ElementRef
  @ViewChild('subError') subError!:ElementRef
 

  constructor( private renderer:Renderer2) {}

  cdr = inject(ChangeDetectorRef)

  sendEmail(name:HTMLInputElement, number:HTMLInputElement, subject:HTMLInputElement, message:string, nameErr:HTMLParagraphElement, numErr:HTMLParagraphElement, subErr:HTMLParagraphElement){
    let nameLink = name.value.replace(" ", "%20")
    let subjectLink = subject.value.replace(" ", "%20")
    let emailMsg = message.replace(" ", "%20")
    let onlyNum = number.value.replace(/\D/g, "")

    if(name.value === ""){
      this.renderer.addClass(nameErr, "b-label-name")
      this.renderer.addClass(name, "input-name")
  
      setTimeout(()=> {
        this.renderer.removeClass(nameErr, "b-label-name")
        this.renderer.removeClass(name, "input-name")
        this.cdr.detectChanges()
      }, 5000)
    } else if (number.value === ""){
      this.renderer.addClass(numErr, "b-label-num")
      this.renderer.addClass(number, "input-num")
      
      setTimeout(()=> {
        this.renderer.removeClass(numErr, "b-label-num")
        this.renderer.removeClass(number, "input-num")
        this.cdr.detectChanges()
      }, 5000)
      return

    } else if (number.value.length !== 11 && !this.regexCel.test(onlyNum)){
      this.renderer.setProperty(this.numError.nativeElement, 'textContent', 'Número inválido')
      this.numError.nativeElement.classList.add("b-label-num")
      this.renderer.addClass(number, "input-num")
      
      
      setTimeout(()=> {
        this.renderer.removeClass(numErr, "b-label-num")
        this.renderer.removeClass(number, "input-num")
        this.cdr.detectChanges()
      }, 5000)
      return
    } else if(subject.value === "") {
      this.renderer.addClass(subErr, "b-label-sub")
      this.renderer.addClass(subject, "input-subject")

      setTimeout(()=> {
        this.renderer.removeClass(subErr, "b-label-sub")
        this.renderer.removeClass(subject, "input-subject")
        this.cdr.detectChanges()
      }, 5000)
      return
    } else {
      let emailMessage = `${this.email}?subject=${subjectLink}&body=${emailMsg}%0A%0A%0A👤%20${nameLink}%0A📞%20${number}`

    window.open(emailMessage, '_blank')
    }
    
  }
}
