import { Injectable } from '@angular/core';
import {ICart} from '../interfaces';
import {BehaviorSubject} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
@Injectable()
export class FoodService {
  initialMenu = {
    daily_menu: []
  };

  initialCart: ICart = {
    products: [],
    totalPrice: 0
  };

  constructor(private http: HttpClient) {
  }

  menu$ = new BehaviorSubject(this.initialMenu);

  getDailyMenu():void {
    this.http.get<any>('dishes').subscribe({
      next: dailyMenu => {
        console.log(dailyMenu)
        this.menu$.next(dailyMenu);
      }
    })
  }

}