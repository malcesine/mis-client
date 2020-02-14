import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label, BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-diagramm',
  templateUrl: './diagramm.component.html',
  styleUrls: ['./diagramm.component.scss']
})
export class DiagrammComponent implements OnInit {

  @ViewChild(BaseChartDirective) chartSelector: BaseChartDirective;
  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];


  private isDragging = false;
  private startIndex = null;
  private selectionRect = {
    w: 0,
    startX: 0,
    startY: 0
  };
  private selectionContext: CanvasRenderingContext2D;
  constructor() { }

  ngOnInit() {
  }


  dragBegin(event, canvas) {
    const realChart = this.chartSelector.chart; // TODO Remove when Typescript ChartJS Updated
    this.selectionContext = realChart.ctx;
    const chart = realChart as any; // TODO Remove when Typescript ChartJS Updated
    const points = chart.getElementsAtEventForMode(event, 'index', {
      intersect: false
    });
    this.startIndex = points[0]._index;
    const rect = canvas.getBoundingClientRect();
    this.selectionRect.startX = event.clientX - rect.left;
    this.selectionRect.startY = chart.chartArea.top;
    this.isDragging = true;
  }
  drag(event, canvas) {
    const realChart = this.chartSelector.chart; // TODO Remove when Typescript ChartJS Updated
    this.selectionContext = realChart.ctx;
    const chart = realChart as any; // TODO Remove when Typescript ChartJS Updated
    const rect = canvas.getBoundingClientRect();
    if (this.isDragging) {
      this.selectionRect.w = (event.clientX - rect.left) - this.selectionRect.startX;
      this.selectionContext.globalAlpha = 0.5;
      this.selectionContext.clearRect(0, 0, canvas.width, canvas.height);
      this.selectionContext.fillRect(this.selectionRect.startX,
        this.selectionRect.startY,
        this.selectionRect.w,
        chart.chartArea.bottom - chart.chartArea.top);
    } else {
      // this.selectionContext.clearRect(0, 0, canvas.width, canvas.height);
      // var x = event.clientX - rect.left;
      // if (x > chart.chartArea.left) {
      //   this.selectionContext.fillRect(x,
      //     chart.chartArea.top,
      //     1,
      //     chart.chartArea.bottom - chart.chartArea.top);
      // }
    }
  }
  dragEnd(event, canvas) {
    const chart = this.chartSelector.chart as any; // TODO Remove when Typescript ChartJS Updated
    const points = chart.getElementsAtEventForMode(event, 'index', {
      intersect: false
    });
    this.isDragging = false;
    console.log(this.startIndex, points);
  }
}
