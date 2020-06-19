import { Injectable } from '@angular/core';
import { Trending} from '../models/trending';
import { HttpClient } from '@angular/common/http';
import { environment} from '../../environments/environment'
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class TrendingService {
  trendingGifs: Trending;
  
  constructor(private http: HttpClient) { 
    // this.trending = new Trending("","", "", "");
  }
  
  // getTrendingGifs(){
  //   interface ApiResponse{
  //     id:string;
  //     title:string;
  //     source:string;
  //     image: string;
  //   }
  //   let promise = new Promise((resolve,reject)=>{
  //     this.http.get<ApiResponse>(environment.trendingUrl).toPromise().then(response=>{
  //       this.trending.id = response.id
  //       this.trending.title = response.title
  //       this.trending.source = response.source
  //       this.trending.image = response.image


  //       resolve()
  //     },
  //     error=>{
  //       this.trending.id = "Never, never, never give up"
  //       this.trending.title = "Winston Churchill"
  //       this.trending.source = "another"
  //       this.trending.image = "jsgf"

  //       reject(error)
  //     })
  //   })
  //   return promise
  // }

  getTrendingGifs(): Observable<Trending[]>{
    return this.http.get<Trending[]>(environment.trendingUrl)
    .pipe(
      tap(data => console.log(`All: ${JSON.stringify(data)}`)),
    )
  }
}
