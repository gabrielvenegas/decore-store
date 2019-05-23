import { NgModule } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InfoSectionComponent } from './info-section/info-section.component';
import { FamilyPlanComponent } from './family-plan/family-plan.component';
import { StoreSectionComponent } from './store-section/store-section.component';
const COMPONENTS = [
  BannerComponent,
  InfoSectionComponent,
  FamilyPlanComponent,
  StoreSectionComponent
]

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  providers: [],
  exports: [...COMPONENTS, CommonModule, FormsModule]
})
export class ComponentModule { }