import { ChangeDetectorRef, Component, ElementRef, inject, Renderer2, ViewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {
  iconWhatsapp = faWhatsapp
  iconUp = faArrowUp
  iconRight = faArrowRight
  iconLeft = faTimes
  iconGitHub = faGithub
  iconEmail = faEnvelope


  diferenca = "Qual a diferença entre LP e Web Shop?"
  tempo = "Em quanto tempo o meu site ficará pronto?"
  fornecer = "O que preciso fornecer para começar?"

  text:Boolean = true

  rotationUp1:string = ""
  rotationUp2:string = ""
  rotationUp3:string = ""

  paraColor1:string = ""
  paraColor2:string = ""
  paraColor3:string = ""

  whatsapp:string = "https://wa.me/559191396547/?text="
  whatsappMessange:string = ""
  display = ""
  marginBottom = ""

  regexCel = /^(\d{2})9\d{8}$/

  private cdr = inject(ChangeDetectorRef)
  constructor(private renderer: Renderer2){}
  @ViewChild('fillError2') paragraphNum!: ElementRef
  @ViewChild('menu') menu!: ElementRef

  respostaDiferenca() {
    const resp = `A diferença principal está no objetivo e na estrutura. Uma Landing Page é uma página única focada em uma única conversão, como fazer novos clientes entrarem em contato com você para adquerir seu produto ou serviço. Ideal para lançar um produto específico ou um serviço.
    Já uma Loja Virtual (Web Shop) é uma plataforma completa de e-commerce, com catálogo de produtos, carrinho de compras, sistema de pagamentos integrado e controle de estoque, feita para empresas que querem vender múltiplos produtos diretamente pelo site.
    `

    if(this.text === true) {
      this.diferenca = resp
      this.paraColor1 = "rgba(225, 255, 255, 80%)"
      this.text = false
      this.rotationUp1 = "rotate(270deg)"
    } else {
      this.diferenca = "Qual a diferença entre LP e Web Shop?"
      this.paraColor1 = "rgba(225, 255, 255, 98%)"
      this.text = true
      this.rotationUp1 = "rotate(0deg)"
    }
  }

  respostaTempo() {
    const resp = `O prazo varia de acordo com a complexidade do projeto. Uma Landing Page estratégica costuma ser entregue entre 7 a 15 dias úteis. Para um Web Shop (Loja Virtual) completo, o prazo médio é de 20 a 40 dias, pois envolve a configuração de sistemas de pagamento, frete e cadastro de produtos.
    `

    if(this.text === true) {
      this.tempo = resp
      this.paraColor2 = "rgba(225, 255, 255, 80%)"
      this.text = false
      this.rotationUp2 = "rotate(270deg)"
    } else {
      this.tempo = "Em quanto tempo o meu site ficará pronto?"
      this.paraColor2 = "rgba(225, 255, 255, 98%)"
      this.text = true
      this.rotationUp2 = "rotate(0deg)"
    }
  }

  respostaFornecer() {
    const resp = `Para o pontapé inicial, será preciso das informações básicas do seu negócio: o logotipo (se tiver), os textos ou ideias do que deseja comunicar, imagens dos seus produtos/serviços e os acessos necessários. Mas não se preocupe! Se você não tiver os textos prontos, irei te ajudar a estruturar todo o conteúdo e a estratégia de comunicação da página.
    `

    if(this.text === true) {
      this.fornecer = resp
      this.paraColor3 = "rgba(225, 255, 255, 80%)"
      this.text = false
      this.rotationUp3 = "rotate(270deg)"
    } else {
      this.fornecer = "Em quanto tempo o meu site ficará pronto?"
      this.paraColor3 = "rgba(225, 255, 255, 98%)"
      this.text = true
      this.rotationUp3 = "rotate(0deg)"
    }
  }


  getMessage(name:HTMLInputElement, num:HTMLInputElement, email:HTMLInputElement, msg:string, errorName:HTMLParagraphElement, errorNum:HTMLParagraphElement, errorEmail:HTMLParagraphElement) {
    let linkName = name.value.replace(" ", "%20")
    let linkMsg = msg.replace(" ", "%20")
    let onlyNum = num.value.replace(/\D/g, "")
    this.whatsappMessange = ""
    this.display = "none"
    
    if(name.value === ""){
      this.renderer.addClass(errorName, "b-label-name")
      this.renderer.addClass(name, "input-name")
  
      setTimeout(()=> {
        this.renderer.removeClass(errorName, "b-label-name")
        this.renderer.removeClass(name, "input-name")
        this.cdr.detectChanges()
      }, 5000)
      return
    } else if (num.value === "") {
      this.renderer.addClass(errorNum, "b-label-num")
      this.renderer.addClass(num, "input-num")
      
      setTimeout(()=> {
        this.renderer.removeClass(errorNum, "b-label-num")
        this.renderer.removeClass(num, "input-num")
        this.cdr.detectChanges()
      }, 5000)
      return

    } else if (num.value.length !== 11 && !this.regexCel.test(onlyNum)){
      this.renderer.setProperty(this.paragraphNum.nativeElement, 'textContent', 'Número inválido')
      this.paragraphNum.nativeElement.classList.add("b-label-num")
      // this.renderer.addClass(errorNum, "b-label-num")
      this.renderer.addClass(num, "input-num")
      console.log(this.paragraphNum.nativeElement)
      
      setTimeout(()=> {
        this.renderer.removeClass(errorNum, "b-label-num")
        this.renderer.removeClass(num, "input-num")
        this.cdr.detectChanges()
      }, 5000)
      return

    } else if(email.value === "") {
      this.renderer.addClass(errorEmail, "b-label-email")
      this.renderer.addClass(email, "input-email")

      setTimeout(()=> {
        this.renderer.removeClass(errorEmail, "b-label-email")
        this.renderer.removeClass(email, "input-email")
        this.cdr.detectChanges()
      }, 5000)
      return

    } else {
      this.whatsappMessange = this.whatsapp += `Nome:%20${linkName}%0ANúmero:%20${num.value}%0AEmail:%20{email.value}%0A${linkMsg}`
      this.cdr.detectChanges()
      window.open(this.whatsappMessange, '_blank')
      console.log(this.whatsapp)
    }
    
    
  }
  
  openMenu(){
    this.renderer.setStyle(this.menu.nativeElement, 'display', 'flex')
    console.log(this.menu.nativeElement)
    this.cdr.detectChanges()
  }

  back(){
    this.renderer.setStyle(this.menu.nativeElement, 'display', 'none')
    console.log(this.menu.nativeElement)
    this.cdr.detectChanges()
  }
}
