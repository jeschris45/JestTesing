import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FooService {


  constructor(
    private httpClient: HttpClient
  ) { }

}
