import {
  NgModule,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { Home } from './home/home';
import { RatingComponent } from '../rating-component/rating-component';
import { InjectionToken } from '@angular/core';
import { Search } from '../search/search';
import { FormsModule } from '@angular/forms';

export const LOCALSTORAGE = new InjectionToken<Storage>('LOCALSTORAGE');

@NgModule({
  declarations: [App, Header, Home],
  imports: [BrowserModule, AppRoutingModule, RatingComponent, Search, FormsModule],
  providers: [
    // { provide: 'LOCALSTORAGE', useValue: localStorage },
    {
      provide: LOCALSTORAGE, // use the InjectionToken
      useFactory: () => {
        try {
          if (typeof window !== 'undefined' && window.localStorage) {
            return window.localStorage;
          }
        } catch {
          /* fallthrough to mock */
        }
        return {
          getItem: (_: string) => null,
          setItem: (_: string, __: string) => {},
          removeItem: (_: string) => {},
          clear: () => {},
        } as Storage;
      },
    },
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
  ],
  bootstrap: [App],
})
export class AppModule {}
