import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ComponentsModule } from '../components/components.module';
import { IntroComponent } from './intro/intro.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { OurWorkComponent } from './our-work/our-work.component';
import { ClientTrustComponent } from './client-trust/client-trust.component';
import { MeetOurTeamComponent } from './meet-our-team/meet-our-team.component';
import { JoinShreevaComponent } from './join-shreeva/join-shreeva.component';
import { TierOfSolutionComponent } from './tier-of-solution/tier-of-solution.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { BlogComponent } from './blog/blog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HomeComponent,
    IntroComponent,
    OurServicesComponent,
    OurWorkComponent,
    ClientTrustComponent,
    MeetOurTeamComponent,
    JoinShreevaComponent,
    TierOfSolutionComponent,
    TestimonialComponent,
    BlogComponent,
    ContactUsComponent,
    FooterComponent,
  ],
  imports: [ComponentsModule, CommonModule, HomeRoutingModule, SwiperModule],
})
export class HomeModule {}
