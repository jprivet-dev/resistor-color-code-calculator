import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about/about.page';
import { NotFoundPageComponent } from './not-found/not-found.page';

const routes: Routes = [
  { path: '', redirectTo: 'resistor', pathMatch: 'full' },
  {
    path: 'resistor',
    loadChildren: () =>
      import('@app/resistor/resistor.module').then((m) => m.ResistorModule),
  },
  { path: 'about', component: AboutPageComponent },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
