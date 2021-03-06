import { Component, OnInit } from '@angular/core';
import {Data} from '@angular/router';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-dashboard-heating',
  templateUrl: './dashboard.heating.component.html',
  styles: [],
  providers: [DataService]
})
export class DashboardHeatingComponent implements OnInit {
  heatingData;

  constructor(private dataService: DataService) { }

  ngOnInit() {
   // this.dataService.getHeatingTemperature().subscribe(data => this.heatingData = data  )
    this.dataService.getHeatingData().subscribe(data => this.heatingData = data);
  }







}
