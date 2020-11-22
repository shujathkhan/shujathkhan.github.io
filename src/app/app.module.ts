import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from "@angular/common";
import { WorkComponent } from './work/work.component';
import { ProjectsComponent } from './projects/projects.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { VrviewComponent } from './vrview/vrview.component';
import { EngineComponent } from './engine/engine.component';
import { CursorComponent } from './cursor/cursor.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkComponent,
    ProjectsComponent,
    VrviewComponent,
    EngineComponent,
    CursorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
