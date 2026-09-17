import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AboutSectionComponent } from './Components/about-section/about-section.component';
import { ListSectionComponent } from './Components/list-section/list-section.component';
import { ListSectionItemComponent } from './Components/list-section-item/list-section-item.component';
import { FormsModule } from '@angular/forms';
import { FooterSectionComponent } from './Components/footer-section/footer-section.component';
import { ProjectCardComponent } from './Components/project-card/project-card.component';
import { ProjectSectionComponent } from './Components/project-section/project-section.component';
import { ContactPopupComponent } from './Components/contact-popup/contact-popup.component';
import { ExpSectionComponent } from './Components/exp-section/exp-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutSectionComponent,
    ListSectionComponent,
    ListSectionItemComponent,
    FooterSectionComponent,
    ProjectCardComponent,
    ProjectSectionComponent,
    ContactPopupComponent,
    ExpSectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
