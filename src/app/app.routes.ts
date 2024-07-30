import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { GalleryComponent } from './gallery/gallery.component';


export const routes: Routes = [
    { path: "", redirectTo:"home", pathMatch:'full' },
    { path: "home", component: HomeComponent, title: 'home' },
    { path: "about", component: AboutComponent, title: 'about' },
    { path: "portfolio", component: PortfolioComponent, title: 'Portfolio' },
    { path: "contact", component: ContactComponent, title: 'contact' },
    { path: "gallery", component: GalleryComponent, title: 'gallery' },
    { path: "**", component: NotfoundComponent },
];
