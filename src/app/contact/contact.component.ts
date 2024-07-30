import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './contact.component.html',
  styleUrls:['../home/home.component.css',"../about/about.component.css",'./contact.component.css']
})
export class ContactComponent {

}
