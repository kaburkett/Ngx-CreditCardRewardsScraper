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
      console.log(this.bankInfo);
    });
  }
}
