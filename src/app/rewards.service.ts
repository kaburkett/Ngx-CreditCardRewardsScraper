import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RewardsService {

  public endpoint = 'http://cashback.isprettymuchtheworst.com';

  constructor(private http: HttpClient) { }

  getRewards() {
    return this.http.get(this.endpoint + '/rewards');
  }
}
