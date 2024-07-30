import { Component } from '@angular/core';
import { product } from '../product';
import { RecomendComponent } from "../recomend/recomend.component";

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RecomendComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  galleryProduct: product[] = [
    { Pname: "Wall clock", pprice: 2545, pimg: "assets/imgs/gallery/1.jpg", pdisc: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { Pname: "wristwatch", pprice: 3568, pimg: "assets/imgs/gallery/2.jpg", pdisc: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { Pname: "Bag", pprice: 8564, pimg: "assets/imgs/gallery/3.jpg", pdisc: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { Pname: "Shose", pprice: 5236, pimg: "assets/imgs/gallery/4.jpg", pdisc: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { Pname: "Card", pprice: 9856, pimg: "assets/imgs/gallery/5.jpg", pdisc: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { Pname: "Smart Watch", pprice: 7545, pimg: "assets/imgs/gallery/6.jpg", pdisc: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { Pname: "Wall clock", pprice: 2545, pimg: "assets/imgs/gallery/1.jpg", pdisc: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { Pname: "wristwatch", pprice: 3568, pimg: "assets/imgs/gallery/2.jpg", pdisc: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { Pname: "Bag", pprice: 8564, pimg: "assets/imgs/gallery/3.jpg", pdisc: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { Pname: "Shose", pprice: 5236, pimg: "assets/imgs/gallery/4.jpg", pdisc: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { Pname: "Card", pprice: 9856, pimg: "assets/imgs/gallery/5.jpg", pdisc: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { Pname: "Smart Watch", pprice: 7545, pimg: "assets/imgs/gallery/6.jpg", pdisc: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  ]

}
