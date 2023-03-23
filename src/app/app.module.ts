import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CurrentWeatherComponent } from './weather-forecast/current-weather/current-weather.component'
import { UpcomingWeatherComponent } from './weather-forecast/upcoming-weather/upcoming-weather.component';
import { WeatherSettingsComponent } from './weather-forecast/weather-settings/weather-settings.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherAdminComponent } from './weather-admin/weather-admin.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent,
    UpcomingWeatherComponent,
    WeatherSettingsComponent,
    WeatherAdminComponent,
    WeatherForecastComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule, 
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
