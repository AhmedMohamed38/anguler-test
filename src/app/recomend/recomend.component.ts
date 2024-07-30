import { Component } from '@angular/core';
import { product } from '../product';
@Component({
  selector: 'app-recomend',
  standalone: true,
  imports: [],
  templateUrl: './recomend.component.html',
  styleUrl: './recomend.component.css'
})
export class RecomendComponent {
  recomendProduct:product[]=[
    { Pname: "Wall clock", pprice: 2545, pimg: "assets/imgs/gallery/portfolio-1.jpg", pdisc: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { Pname: "Wall clock", pprice: 2545, pimg: "assets/imgs/gallery/portfolio-3.jpg", pdisc: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { Pname: "Wall clock", pprice: 2545, pimg: "assets/imgs/gallery/portfolio-4.jpg", pdisc: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { Pname: "Wall clock", pprice: 2545, pimg: "assets/imgs/gallery/portfolio-1.jpg", pdisc: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { Pname: "Wall clock", pprice: 2545, pimg: "assets/imgs/gallery/portfolio-3.jpg", pdisc: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { Pname: "Wall clock", pprice: 2545, pimg: "assets/imgs/gallery/portfolio-4.jpg", pdisc: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { Pname: "Wall clock", pprice: 2545, pimg: "assets/imgs/gallery/portfolio-1.jpg", pdisc: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { Pname: "Wall clock", pprice: 2545, pimg: "assets/imgs/gallery/portfolio-3.jpg", pdisc: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  ]

}
