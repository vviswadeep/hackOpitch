import { Component, Input, OnInit } from '@angular/core';

import { AngularDeviceInformationService } from 'angular-device-information';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css'],
})
export class DeviceComponent implements OnInit {
  constructor(
    public deviceInformationService: AngularDeviceInformationService
  ) {
    this.isMobile = deviceInformationService.isMobile();
    console.log(deviceInformationService.isMobile()); // returns if the device is a mobile device (android / iPhone / windows-phone etc)
    this.isTablet = deviceInformationService.isTablet();
    console.log(deviceInformationService.isTablet()); // returns if the device is a tablet (tablet iPad etc)
    this.isDesktop = deviceInformationService.isDesktop();
    console.log(deviceInformationService.isDesktop()); // returns if the app is running on a Desktop browser.
    this.getDeviceType = deviceInformationService.getDeviceType();
    console.log(deviceInformationService.getDeviceType()); // returns if the app is running on a Desktop browser.
    this.getDeviceInfo = deviceInformationService.getDeviceInfo();
    console.log(deviceInformationService.getDeviceInfo());
    // console.log(deviceInformationService.getDeviceInfo().os); // returns os name like Windows/Andtoid/iOS/Linux/Mac OS X etc
    // console.log(deviceInformationService.getDeviceInfo().osVersion); // returns os version like 10/8.1/7 ...etc
    // console.log(deviceInformationService.getDeviceInfo().browser); // returns browser name like chrome/firefox ...etc
    // console.log(deviceInformationService.getDeviceInfo().browserVersion); // returns browser version as number
    // console.log(deviceInformationService.getDeviceInfo().browserMajorVersion); // returns full browser version as number
    // console.log(deviceInformationService.getDeviceInfo().screen_resolution); // returns screnn size like 1390x860/640x800 ...etc
    // console.log(deviceInformationService.getDeviceInfo().cookies); // returns cookies enabled or no
    // console.log(deviceInformationService.getDeviceInfo().userAgent); // returns userAgent
  }

  @Input() isMobile: boolean;
  @Input() isTablet: boolean;
  @Input() isDesktop: boolean;
  @Input() getDeviceType: string;
  @Input() getDeviceInfo: any;
  ngOnInit() {}
}
