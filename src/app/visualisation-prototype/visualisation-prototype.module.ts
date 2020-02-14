import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterModule } from '@angular/router';
import { ExportComponent } from './export/export.component';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FilterComponent } from './filter/filter.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { ChartsModule } from 'ng2-charts';
import { DiagrammComponent } from './diagramm/diagramm.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    ExportComponent,
    TableComponent,
    FilterComponent,
    DiagrammComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    MatTabsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    MatCardModule,
    MatPaginatorModule
  ],
  exports: [
    HeaderComponent,
    DiagrammComponent,
    TableComponent,
    ExportComponent
  ]
})
export class VisualisationPrototypeModule { }
