import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
    <h1>Posts</h1>
    <ul>
      <li *ngFor="let post of posts | async">
        {{ post.id}} - {{ post.title }}
      </li>
    </ul>
  `,
})
export class AppComponent implements OnInit{
  posts: Observable<Post[]> ;

  constructor(private  httpClient: HttpClient) {}

  ngOnInit(): void {
    this.posts = this.httpClient.get<Post[]>("https://jsonplaceholder.typicode.com/posts")
  }
}

interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
}
