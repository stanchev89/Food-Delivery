import { Component, OnInit } from '@angular/core';
import {FoodService} from '../food.service';
import {IDish, IMenu} from '../../interfaces';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu$: Subject<IMenu> = this.foodService.menu$;
  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.foodService.getDailyMenu();
  }

  clickedOutsideCart(): void{
  }

}