import { Component } from '@angular/core';
import { NavbarComponent } from '../componets/navbar/navbar.component';
import { HeaderComponent } from '../componets/header/header.component';
import { AboutMeComponent } from '../componets/about-me/about-me.component';
import { SkillsComponent } from '../componets/skills/skills.component';
import { PortfolioComponent } from '../componets/portfolio/portfolio.component';
import { ContactoComponent } from '../componets/contacto/contacto.component';
import { FooterComponent } from '../componets/footer/footer.component';

@Component({
  selector: 'app-home-page',
  imports: [NavbarComponent, HeaderComponent,AboutMeComponent,SkillsComponent,PortfolioComponent,ContactoComponent,FooterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
