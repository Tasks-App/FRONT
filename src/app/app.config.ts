import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ApiModule, Configuration } from './api-client';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      BrowserModule,
      BrowserAnimationsModule,
      ApiModule.forRoot(() => new Configuration({ basePath: 'http://localhost:8080' }))
    ),
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes),
    provideZoneChangeDetection({ eventCoalescing: true })
  ]
};
