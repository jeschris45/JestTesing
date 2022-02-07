import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DependentService {
  constructor(
  ) { }

  public shareMethod() {
    console.log('I am sharing');
  }
}
