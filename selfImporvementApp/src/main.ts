import { bootstrapApplication } from '@angular/platform-browser';
import { LandingPageComponent } from './app/landing-page/landing-page.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';


  bootstrapApplication(LandingPageComponent,{
    providers: [provideRouter(routes)]
  } )