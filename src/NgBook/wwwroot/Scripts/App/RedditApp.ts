import { bootstrap } from "angular2/platform/browser";
import { Component } from "angular2/core";

class Article {

    constructor(public title: string, public link: string, public votes?: number) {
        this.votes = votes || 0;
    }
}

@Component({
    selector: "reddit-article",
    host: { "class": "row" },
    templateUrl: "reddit-article.html"
})
class RedditArticle {

    public votes: number;
    public title: string;
    public link: string;

    constructor() {
        this.title = "Angular 2";
        this.link = "http://angular.io";
        this.votes = 10;
    }

    public voteUp($event: Event) {
        $event.preventDefault();
        this.votes += 1;
    }

    public voteDown($event: Event) {
        $event.preventDefault();
        this.votes -= 1;
    }
}

@Component({
    selector: "reddit-app",
    templateUrl: "reddit-app.html",
    directives: [RedditArticle]
})
class RedditApp {

    constructor() { }

    public addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
        console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    }
}

bootstrap(RedditApp);