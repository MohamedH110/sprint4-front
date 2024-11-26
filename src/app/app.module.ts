import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
import { ElevesComponent } from './eleves/eleves.component';

function initializeKeycloak(keycloak: KeycloakService, platformId: Object) {
  return () => {
    if (isPlatformBrowser(platformId)) {
      return keycloak.init({
        config: {
          url: 'http://localhost:8083',
          realm: 'mohamed-realm',
          clientId: 'eleve-app'
        },
        initOptions: {
          /*onLoad: 'login-required',
          checkLoginIframe: true,*/
          onLoad: 'check-sso',
          silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html'
        }
      });
    }
    return Promise.resolve(); // SSR-safe
  };
}

@NgModule({
  declarations: [
    AppComponent,
    ElevesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    KeycloakAngularModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService, PLATFORM_ID]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
