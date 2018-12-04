import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

import localeJa from '@angular/common/locales/ja';
registerLocaleData(localeJa);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { SharedModule } from 'projects/shared/src/lib/shared.module';
import { AuthLayoutComponent } from './shared/layout/auth-layout.component';
import { MainLayoutComponent } from './shared/layout/main-layout.component';
import { HeaderComponent } from './shared/layout/header.component';
import { FooterComponent } from './shared/layout/footer.component';
import { NaviComponent } from './shared/layout/navi.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    MainLayoutComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    NaviComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    NgxSpinnerModule,
    SharedModule.forRoot()
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'ja' }],
  bootstrap: [AppComponent]
})
export class AppModule {}
