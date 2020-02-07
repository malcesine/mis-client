import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { DiagrammComponent } from './diagramm/diagramm.component';
import { ExportComponent } from './export/export.component';
import { TableComponent } from './table/table.component';


const routes: Routes = [{
  path: '',
  component: NavigationComponent,
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
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisualisationPrototypeRoutingModule { }
