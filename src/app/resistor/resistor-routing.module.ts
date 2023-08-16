import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResistorPageComponent } from './resistor.page';

const routes: Routes = [{ path: '', component: ResistorPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResistorRoutingModule {}
