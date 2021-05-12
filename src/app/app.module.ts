import { CovidDataResolver } from './shared/services/covid-data-resolver';
import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppInitService } from './shared/services/app-init.service';
import { ScreensModule } from './screens/screens.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './library/shared-components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
export function init_app(appInitService: AppInitService): any {
  return () => appInitService.init();
}
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScreensModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      closeButton: true,
      easing: 'ease-in'
    })
  ],
  providers: [
    AppInitService,
    {
      provide: APP_INITIALIZER,
      useFactory: init_app,
      deps: [AppInitService],
      multi: true
    },
    CovidDataResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
