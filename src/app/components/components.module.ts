import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { GlassmorphismCardComponent } from './glassmorphism-card/glassmorphism-card.component';

const components = [HeaderComponent, GlassmorphismCardComponent];

@NgModule({
  declarations: [components],
  imports: [CommonModule],
  exports: components,
})
export class ComponentsModule {}
