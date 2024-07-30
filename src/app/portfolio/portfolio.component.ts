import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  constructor() {
    this.open()
    this.cloce()


  }
  portfoloImg: string[] =
    ["assets/imgs/poert1.png",
      "assets/imgs/poert2.png",
      "assets/imgs/poert3.png",
      "assets/imgs/poert1.png",
      "assets/imgs/poert2.png",
      "assets/imgs/poert3.png"];
      


  open() {

    if (typeof document !== 'undefined') {
      document.querySelectorAll(".hover").forEach((card => {
        card.addEventListener("click", () => {
          console.log('hi')
        })
      }))
      document.querySelectorAll(".card").forEach((card => {
        card.addEventListener("click", () => {
          document.querySelector(".layer")?.classList.remove("d-none")
          let x = card.firstElementChild?.getAttribute("src")
          document.querySelector(".layer-img")?.setAttribute("src", `${x}`)
        })
      }))

    }
  }
  cloce() {
    if (typeof document !== 'undefined') {
      document.querySelector(".fa-xmark")?.addEventListener("click", () => {
        document.querySelector(".layer")?.classList.add("d-none")
      })
    }
  }


}