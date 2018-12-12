import {AfterContentInit, Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {MatDialog, MatDialogConfig, MatGridList, MatSidenav} from '@angular/material';
import {MediaChange, ObservableMedia} from '@angular/flex-layout';

@Component({
  selector: 'app-setting',
  template: '<label>Would you like dog picks every in ??</label><mat-slide-toggle></mat-slide-toggle>'
})
export class SettingComponent {}

@Component({
  selector: 'app-flex-layout',
  templateUrl: './flex-layout.component.html',
  styleUrls: ['./flex-layout.component.css'],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-100px)' }),
        animate('300ms 1s ease-out', style({ opacity: 1, transform: 'none' })),
      ])
    ])
  ]
})
export class FlexLayoutComponent implements AfterContentInit {

  title = 'flexlayout-project';
  @ViewChild('sidenav') sidenav: MatSidenav;
  currentDog = {};
  isDarkTheme = false;
  dogs = [
    {
      row: 1,
      name : 'Titre 1',
      t: 'Lucas',
      img : 'https://images.pexels.com/photos/940380/pexels-photo-940380.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      row: 1,
      name : 'Titre 2',
      t: 'Duret',
      img : 'https://images.pexels.com/photos/991012/pexels-photo-991012.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=940'
    },
    {
      row: 1,
      t: 'Quentin',
      name : 'Titre 3',
      img : 'https://images.pexels.com/photos/701449/pexels-photo-701449.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      row: 1,
      name : 'Titre 4',
      t: 'Fuleau',
      img : 'https://images.pexels.com/photos/946351/pexels-photo-946351.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      row: 1,
      name : 'Titre 5',
      t: 'ENSC',
      img : 'https://images.pexels.com/photos/305535/pexels-photo-305535.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      row: 1,
      t: 'Quentin nnn',
      name : 'Titre sss3',
      img : 'https://images.pexels.com/photos/1458695/pexels-photo-1458695.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    {
      row: 1,
      name : 'Tisstre 4',
      t: 'Fulssseau',
      img : 'https://images.pexels.com/photos/697243/pexels-photo-697243.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'},
    {
      row: 1,
      name : 'Titsssre 5',
      t: 'ENsssqqSC',
      img : 'https://images.pexels.com/photos/1654476/pexels-photo-1654476.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'}
  ];
  @ViewChild('grid') grid: MatGridList;
  gridByBreakpoint = {xl: 5, lg: 4, md: 3, sm: 2, xs: 1 };

  constructor(public dialog: MatDialog, public vcr: ViewContainerRef, private observableMedia: ObservableMedia) {
  }

  ngAfterContentInit() {
    this.observableMedia.asObservable().subscribe((change: MediaChange) => {
      this.grid.cols = this.gridByBreakpoint[change.mqAlias];
    });
  }

  openDialog() {
    const config = new MatDialogConfig();
    config.viewContainerRef = this.vcr;
    this.dialog.open(SettingComponent, config);
  }

  show(dog) {
    this.currentDog = dog;
    this.sidenav.open();
  }

}
