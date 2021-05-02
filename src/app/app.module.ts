import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppInitService } from './shared/services/app-init.service';
import { ScreensModule } from './screens/screens.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './library/shared-components/navbar/navbar.component';
import { FooterComponent } from './library/shared-components/footer/footer.component';

export function init_app(appInitService: AppInitService): any {
  return () => appInitService.init();
}
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    ScreensModule,
    NgbModule
  ],
  providers: [
    AppInitService,
    {
      provide: APP_INITIALIZER,
      useFactory: init_app,
      deps: [AppInitService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
