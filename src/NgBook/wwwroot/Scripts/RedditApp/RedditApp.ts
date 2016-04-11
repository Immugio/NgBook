import { bootstrap } from "angular2/platform/browser";
import { Component, EventEmitter } from "angular2/core";

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
    outputs: ["articleClicked"],
    templateUrl: "reddit-article.html"
})
class RedditArticle {

    public article: Article;
    public articleClicked: EventEmitter<string>;

    constructor() {
        this.articleClicked = new EventEmitter<string>();
    }

    public voteUp($event: Event) {
        $event.preventDefault();
        this.article.votes += 1;
    }

    public voteDown($event: Event) {
        $event.preventDefault();
        this.article.votes -= 1;
    }

    public onArticleClicked(id: string): void {
        this.articleClicked.emit(id);
    }
}

@Component({
    selector: "reddit-app",
    templateUrl: "reddit-app.html",
    directives: [RedditArticle]
})
class RedditApp {

    public articles: Article[];

    public get sortedArticles(): Article[] {
        return this.articles.sort((a, b) => b.votes - a.votes);
    }

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

    public propagatedFromChildren(id: string) {
        console.log(id);
    }

    public onArticleClicked(id: string): void {
        console.log(id);
    }
}

bootstrap(RedditApp);