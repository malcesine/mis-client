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
    interfaceWithRoute: true
  };
  navigation: MultilevelNodes[] = [
    {
      label: 'Marktinformationssystem',
      items: [
        {
          label: 'Intraday DE+AT',
          items: [
            {
              label: 'EPEX Intraday DE/AT 15min'
            },
            {
              label: 'EPEX Intraday DE/AT 60min'
            },
            {
              label: 'EPEX Intraday DE 15min'
            },
            {
              label: 'EPEX Intraday DE 60min'
            },
            {
              label: 'EPEX Intraday AT 15min'
            },
            {
              label: 'EPEX Intraday AT 60min'
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
                  label: 'EXAA/EPEC DE/AT Tages Spot (Nur bis 10/2018)'
                },
                {
                  label: 'EXAA/EPEC DE/AT (Nur bis 10/2018)'
                },
                {
                  label: 'Spotmarkt DE'
                },
                {
                  label: 'Spotmarkt AT'
                },
                {
                  label: 'Market Coupling Preis AT (Daten nicht zur Veröffentlichung freigegeben)'
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
    }
  ]
  constructor(private breakpointObserver: BreakpointObserver) { }

}
