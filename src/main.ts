import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { NavbarComponent } from './navbar/navbar.component';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
