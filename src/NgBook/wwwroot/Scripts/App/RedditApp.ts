﻿import { bootstrap } from "angular2/platform/browser";
import { Component } from "angular2/core";

class Article {

    constructor(public title: string, public link: string, public votes?: number) {
        this.votes = votes || 0;
    }

    public domain(): string {
        try {
            let link = this.link.split("//")[1];
            return link.split("/")[0];
        }
        catch(ex) {
            return null;
        }
    }
}

@Component({
    selector: "reddit-article",
    host: { "class": "row" },
    inputs: ["article"],
    templateUrl: "reddit-article.html"
})
class RedditArticle {

    public article: Article;

    constructor() { }

    public voteUp($event: Event) {
        $event.preventDefault();
        this.article.votes += 1;
    }

    public voteDown($event: Event) {
        $event.preventDefault();
        this.article.votes -= 1;
    }
}

@Component({
    selector: "reddit-app",
    templateUrl: "reddit-app.html",
    directives: [RedditArticle]
})
class RedditApp {

    public articles: Article[];

    constructor() {
        this.articles = [
            new Article("Angular 2", "http://angular.io", 3),
            new Article("Fullstack", "http://fullstack.io", 2),
            new Article("Angular Homepage", "http://angular.io", 1)
        ];
    }

    public addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
        console.log(`Adding article title: ${title.value} and link: ${link.value}`);
        this.articles.push(new Article(title.value, link.value, 0));
        title.value = "";
        link.value = "";
    }

    public sortedArticles(): Article[] {
        return this.articles.sort((a, b) => { return b.votes - a.votes });
    }
}

bootstrap(RedditApp);