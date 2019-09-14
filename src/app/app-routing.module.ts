import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CurrentComponent } from './current/current.component';
import { FiveComponent } from './five/five.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'current', component: CurrentComponent },
  { path: 'five', component: FiveComponent },
  { path: '', component: CurrentComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
