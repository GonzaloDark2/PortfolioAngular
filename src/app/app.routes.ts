/*import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
  {
    path : 'home',
    component: HomePageComponent,
  },
  {
    path : '**',
    redirectTo : 'home',
   pathMatch : 'full',
  },
];*/
import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutMeComponent } from './componets/about-me/about-me.component';
import { ContactoComponent } from './componets/contacto/contacto.component';
import { FooterComponent } from './componets/footer/footer.component';
import { HeaderComponent } from './componets/header/header.component';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { PortfolioComponent } from './componets/portfolio/portfolio.component';
import { SkillsComponent } from './componets/skills/skills.component';


export const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'aboutme',
    component: AboutMeComponent,
  },
  {
    path: 'contacto',
    component: ContactoComponent,
  },
  {
    path: 'footer',
    component: FooterComponent,
  },
  {
    path: 'header',
    component: HeaderComponent,
  },
  {
    path: 'navbar',
    component: NavbarComponent,
  },
  {
    path: 'porfolio',
    component: PortfolioComponent,
  },
  {
    path: 'skills',
    component: SkillsComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
