import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeDetailsPageRoutingModule } from './recipe-details-page-routing.module';
import { RecipeDetailsPageComponent } from './recipe-details-page.component';
import { RecipeDetailsTopContentModule} from "../../features/recipe-details/components/recipe-details-top-content/recipe-details-top-content.module";

@NgModule({
  declarations: [
    RecipeDetailsPageComponent
  ],
    imports: [
        CommonModule,
        RecipeDetailsPageRoutingModule,
        RecipeDetailsTopContentModule,
    ]
})
export class RecipeDetailsPageModule { }
