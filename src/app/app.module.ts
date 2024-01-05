import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';

import { AngularDeviceInformationService } from 'angular-device-information'; //New Line
import { DeviceComponent } from './device/device.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  providers: [AngularDeviceInformationService],
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    NavbarComponent,
    DeviceComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
