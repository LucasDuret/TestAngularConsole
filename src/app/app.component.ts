import {Component, OnInit} from '@angular/core';
import {NotificationService} from './services/notification.service';
import {MatSnackBar} from '@angular/material';
import {Title} from '@angular/platform-browser';
import {ActivatedRouteSnapshot, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TestAngularConsole';

  constructor(
    private notificationService: NotificationService,
    public snackBar: MatSnackBar,
    private titleService: Title,
    private router: Router
  ) {
    this.notificationService.subj_notification.subscribe(message => {
      snackBar.open(message, 'Action', { duration: 1000 });
    });
  }

  private getPageTitle(routeSnapshot: ActivatedRouteSnapshot) {
    let title: string = routeSnapshot.data && routeSnapshot.data['pageTitle'] ? routeSnapshot.data['pageTitle'] : 'Lucas Test';
    if (routeSnapshot.firstChild) {
      title = this.getPageTitle(routeSnapshot.firstChild) || title;
    }
    return title;
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.titleService.setTitle(this.getPageTitle(this.router.routerState.snapshot.root));
      }
    });
  }


}
