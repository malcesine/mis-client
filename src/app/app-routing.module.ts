import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './essentials/navigation/navigation.component';


const routes: Routes = [{
  path: '',
  component: NavigationComponent,
  children: [
    {
      path: 'visualisation',
      loadChildren: () => import('./visualisation-prototype/visualisation-prototype.module').then(m => m.VisualisationPrototypeModule)
    },
    {
      path: '**',
      redirectTo: '/visualisation',
      pathMatch: 'full'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
