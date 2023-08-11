import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { Section1Component } from './components/section1/section1.component';
import { Section2Component } from './components/section2/section2.component';
import { Section3Component } from './components/section3/section3.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { LangComponent } from './components/lang/lang.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { FormsModule } from "@angular/forms"

const routes: Routes = [
  {
    path: '',
    children: []
  }
];

// Función para cargar archivos de traducción desde el servidor
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

function getLanguage(): string {
  const lang = localStorage.getItem('lang') ?? 'en'
  return lang
}

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    LangComponent,
    FooterComponent,
    ContactMeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    NgCircleProgressModule.forRoot({
      "backgroundColor": "#F1F1F1",
      "backgroundPadding": -18,
      "radius": 60,
      "toFixed": 2,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#4882c2",
      "innerStrokeColor": "#32CD32",
      "innerStrokeWidth": 1,
      "startFromZero": false,
      "responsive": true,
      "clockwise": false,
      "subtitleFontSize": '18'
    }),
    TranslateModule.forRoot({
      defaultLanguage: getLanguage(),
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NgImageSliderModule,
    FormsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'en' } // Establecer el valor LOCALE_ID como 'es'
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
