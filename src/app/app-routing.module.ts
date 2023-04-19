import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ShipsComponent } from './ships/ships.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'ships', component: ShipsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
