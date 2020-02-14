import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Configuration, MultilevelNodes } from 'ng-material-multilevel-menu';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  config: Configuration = {
    interfaceWithRoute: true,
    highlightOnSelect: true,
    collapseOnSelect: true
  };
  navigation: MultilevelNodes[] = [
    {
      label: 'Intraday DE+AT',
      items: [
        {
          label: 'EPEX Intraday DE/AT 15min',
          link: '/visualisation/ABC1'
        },
        {
          label: 'EPEX Intraday DE/AT 60min',
          link: '/visualisation/ABC2'
        },
        {
          label: 'EPEX Intraday DE 15min',
          link: '/visualisation/ABC3'
        },
        {
          label: 'EPEX Intraday DE 60min',
          link: '/visualisation/ABC4'
        },
        {
          label: 'EPEX Intraday AT 15min',
          link: '/visualisation/ABC5'
        },
        {
          label: 'EPEX Intraday AT 60min',
          link: '/visualisation/ABC6'
        }
      ]
    },
    {
      label: 'Spot',
      items: [
        {
          label: 'Spotmarkt DE+AT',
          items: [
            {
              label: 'EXAA/EPEC DE/AT Tages Spot (Nur bis 10/2018)',
              link: '/visualisation/ABC7'
            },
            {
              label: 'EXAA/EPEC DE/AT (Nur bis 10/2018)',
              link: '/visualisation/ABC8'
            },
            {
              label: 'Spotmarkt DE',
              link: '/visualisation/ABC9'
            },
            {
              label: 'Spotmarkt AT',
              link: '/visualisation/ABC10'
            },
            {
              label: 'Market Coupling Preis AT (Daten nicht zur Veröffentlichung freigegeben)',
              link: '/visualisation/ABC11'
            }
          ]
        },
        {
          label: 'Spotmärkte Europa',
          items: [
            {
              label: '...'
            }
          ]
        }
      ]
    },
    {
      label: 'Futures',
      items: [
        {
          label: '...'
        }
      ]
    },
    {
      label: 'Spreads',
      items: [
        {
          label: '...'
        }
      ]
    },
    {
      label: 'Emissions',
      items: [
        {
          label: '...'
        }
      ]
    },
    {
      label: 'Erneuerbare Energien',
      items: [
        {
          label: '...'
        }
      ]
    }
  ]
  constructor(private breakpointObserver: BreakpointObserver) { }

}
