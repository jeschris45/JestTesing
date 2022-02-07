import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription, Observable } from 'rxjs';
import { DependentService } from './dependent.service';


@Injectable({
  providedIn: 'root'
})
export class IndependentService {
  constructor( private dependentService: DependentService
  ) { }
}
