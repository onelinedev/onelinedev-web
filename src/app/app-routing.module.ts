import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlutterComponent } from './components/flutter/flutter.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'flutter',
    component: FlutterComponent,
  },
  {
    path: '',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
