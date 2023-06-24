import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, retry, retryWhen } from 'rxjs';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css'],
})
export class RetryComponent {
  users: any;
  fetching: boolean = false;
  status: any;
  constructor(private _api: HttpClient) {}

  ngOnInit() {
    // this.fetchDetails();
    this.status = 'No Data';
  }

  fetchDetails() {
    const source = this._api.get('https://jsonplaceholder.typicode.com/users');
    source
      .pipe(
        retry(2)
        // retryWhen((err) => err.pipe(delay(3000)))
      )
      .subscribe(
        (res) => {
          this.status = 'fetching...';
          this.fetching = true;
          // console.log(res);
          this.users = res;
          this.status = 'Data Fetched';
          this.fetching = false;
        },
        (err) => {
          console.log(err);
          this.fetching = false;
          this.status = 'Problem while fetching error';
        }
      );
  }
}
