import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './essentials/navigation/navigation.component';
import { HeaderComponent } from './visualisation-prototype/header/header.component';
import { DiagrammComponent } from './visualisation-prototype/diagramm/diagramm.component';
import { TableComponent } from './visualisation-prototype/table/table.component';
import { ExportComponent } from './visualisation-prototype/export/export.component';


const routes: Routes = [{
  path: '',
  component: NavigationComponent,
  children: [
    {
      path: 'visualisation/:vID',
      component: HeaderComponent,
      children: [
        {
          path: 'diagramm',
          component: DiagrammComponent
        },
        {
          path: 'tabelle',
          component: TableComponent
        },
        {
          path: 'export',
          component: ExportComponent
        },
        {
          path: '**',
          redirectTo: 'diagramm',
          pathMatch: 'full'
        }
      ]
    },
    {
      path: '**',
      redirectTo: '/visualisation/abc',
      pathMatch: 'full'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
