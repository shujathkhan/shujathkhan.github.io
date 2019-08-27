import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { ProjectsComponent } from './projects/projects.component';
import { VrviewComponent } from './vrview/vrview.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'work',component:WorkComponent},
  {path:'vrview',component:VrviewComponent},
  {path:'projects',component:ProjectsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
