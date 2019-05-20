import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ArticleService} from '../../service/article.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Article} from '../../model/article';

@Component({
  selector: 'app-news-detail',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {

  constructor(private service: ArticleService,
              private route: ActivatedRoute,
              private router: Router) { }
  article: Article = new Article();
  fail: boolean = false;
  message: string;
  ngOnInit() {
    this.getArticle();
  }

  getArticle(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getArticle(id).subscribe(data => {
      const code = data.code;
      if (code === 404) {
        this.failAlert(data.message);
      }
      if (code === 200) {
        this.article = data.data as Article;
      }
    });
  }

  private failAlert(message: string) {
    this.fail = true;
    this.message = message;
    setTimeout(() => {
      this.fail = false;
      this.router.navigate(['/news']);
      }, 2000);
  }

}
