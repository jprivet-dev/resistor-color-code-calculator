import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResistorPage } from './resistor.page';

const routes: Routes = [{ path: '', component: ResistorPage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResistorRoutingModule {}
