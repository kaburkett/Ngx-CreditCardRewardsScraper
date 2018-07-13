import { Component, OnInit } from '@angular/core';
import { RewardsService } from './rewards.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public bankInfo;

  constructor(private rewards: RewardsService) { }

  ngOnInit() {
    this.rewards.getRewards().subscribe(response => {
      this.bankInfo = response;
      // Transform this to fit the rest... should move to the api side later
      this.bankInfo[2][3] = this.toTitleCase(this.bankInfo[2][3]);
      console.log(this.bankInfo);
    });
  }

  toTitleCase(str) {
  str = str.substring(str.indexOf('.') + 1);
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
}
