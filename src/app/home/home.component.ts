import { Component, OnInit } from '@angular/core';
import {Trending} from '../models/trending'
import { TrendingService} from '../services/trending.service'
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  trending: Trending[];
  erroMsg: string

  constructor(private trendingService: TrendingService) { }

  ngOnInit(): void {
    this.trendingService.getTrendingGifs().subscribe({
      // next: trending => this.trending = trending['data'],
      // error: err => this.erroMsg = err
      next(trending) { console.log(trending)}
    })
  }

}
