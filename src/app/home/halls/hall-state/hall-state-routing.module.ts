import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HallStatePage } from './hall-state.page';

const routes: Routes = [
  {
    path: '',
    component: HallStatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HallStatePageRoutingModule {}
