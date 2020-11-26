import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { HomeComponent } from './home/home.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, TestComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  // bootstrap: [AppComponent],
  entryComponents: [AppComponent], // notice we remove bootstrap in favour of entryComponents
})
export class AppModule {
  constructor(
    private injector: Injector,
    private router: Router,
    private location: Location
  ) {
    const appElement = createCustomElement(AppComponent, {
      injector: this.injector,
    });

    customElements.define('my-ng-element', appElement);

    //init router with starting path
    this.router.navigateByUrl(this.location.path(true));

    //on every route change tell router to navigate to defined route
    this.location.subscribe((data) => {
      this.router.navigateByUrl(data.url);
    });
  }

  ngDoBootstrap() {}
}
