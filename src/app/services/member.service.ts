import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MemberService {


  constructor(private httpClient: HttpClient) { }

  memberDate(): Observable<any> {
    /* return of({
       badget: 100,
       totalProduct: 3,
       lastPurchase: ('01/05/2018')
     })
 */
    return this.httpClient.get(environment.serverUrlAuth + 'members/2');
  }
}
