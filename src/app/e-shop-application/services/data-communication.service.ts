import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataCommunicationService {

  constructor() { }

  public detailData = new BehaviorSubject(undefined);
}
