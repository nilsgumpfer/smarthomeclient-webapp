import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeatingComponent } from './heating/heating.component';
import { ShutterComponent } from './shutter/shutter.component';
import { ThermometerComponent } from './thermometer/thermometer.component';
import { WeatherstationComponent } from './weatherstation/weatherstation.component';
import { SettingsComponent } from './settings/settings.component';
import {HeaderComponent} from './header.component';
import {routing} from './app.routing';
import { DashboardHeatingComponent } from './dashboard/devices/dashboard.heating.component';
import { DashboardShutterComponent } from './dashboard/devices/dashboard.shutter.component';
import { DashboardThermometerComponent } from './dashboard/devices/dashboard.thermometer.component';
import { DashboardWeatherstationComponent } from './dashboard/devices/dashboard.weatherstation.component';
import { UserService } from './services/user.service';
import {PhotoService} from './services/photo.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    DashboardHeatingComponent,
    DashboardShutterComponent,
    DashboardThermometerComponent,
    DashboardWeatherstationComponent,
    HeatingComponent,
    ShutterComponent,
    ThermometerComponent,
    WeatherstationComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [UserService, PhotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
