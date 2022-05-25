import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderNavbarComponent} from "./header-navbar.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {AppRoutingModule} from "../../../../app-routing.module";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [HeaderNavbarComponent],
  imports: [CommonModule, MatToolbarModule, AppRoutingModule, MatButtonModule],
  exports: [HeaderNavbarComponent]
})
export class HeaderNavbarModule { }
