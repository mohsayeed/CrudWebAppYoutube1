import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 constructor(private http:HttpClient){
 }

  getApiUrl = 'https://localhost:7172/api/StudentDetails'
  title = 'learnprgm';
  public details:any;
  ngOnInit(){
    this.http.get<any>(this.getApiUrl).subscribe((response)=>{
      console.log(response)
      this.details = response
    })
  }

}
