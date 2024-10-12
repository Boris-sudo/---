import { AfterViewInit, Component, Renderer2 } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './comps/header/header.component';
import { SideBarComponent } from './comps/side-bar/side-bar.component';
import { filter } from 'rxjs';
import { DeleteFridgeMenuComponent } from './comps/_models/delete-fridge-menu/delete-fridge-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SideBarComponent, DeleteFridgeMenuComponent],
  template: `
    <HeaderComp/>

    <div class="content">
      <router-outlet/>
      <SideBar/>
      <DeleteFridgeMenu/>
    </div>
  `,
  styles: `
    .content {
      width:  100vw;
      min-height: calc(100vh - var(--header-height));
      background: var(--background-secondary);
    }
  `
})
export class AppComponent implements AfterViewInit {
  title = 'prodHack';

  constructor(
    private router: Router,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit() {
    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd)
    ).subscribe(() => {
      if (this.router.url === '/login' || this.router.url === '/register') {
        document.documentElement.style.setProperty("--header-height", "0");
      } else
        document.documentElement.style.setProperty("--header-height", "80px");
    });
  }
}
