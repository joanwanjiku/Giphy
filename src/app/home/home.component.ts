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
  trending: Trending;

  constructor(private trendingService: TrendingService) { }

  ngOnInit(): void {
    this.trending = this.trendingService.getTrendingGifs()
  }

}
