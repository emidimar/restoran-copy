import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { BookingComponent } from './booking/booking.component';
import { TeamComponent } from './team/team.component';
import { HeroComponent } from './hero/hero.component';
import { InfoCardComponent } from './ui/info-card/info-card.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ServicesRestorantComponent } from './servicesRestorant/services-restorant/services-restorant.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    AboutComponent,
    MenuComponent,
    ContactComponent,
    BookingComponent,
    TeamComponent,
    TestimonialsComponent,
    HeroComponent,
    InfoCardComponent,
    ServicesRestorantComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
