import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../service/article.service';
import {Article} from '../../model/article';
import {Page} from '../../model/page';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  constructor(private service: ArticleService) { }
  articles: Article[];
  page = 1;
  collectionSize: number = 0;
  ngOnInit() {
    this.pageArticles();
  }
  pageArticles() {
    const page: Page = new Page();
    page.page = this.page;
    page.pageCount = 12;
    this.service.getPageArticles(page).subscribe(res => {
      this.articles = res.data;
      this.collectionSize = res.dataCount;
    });
  }

}
