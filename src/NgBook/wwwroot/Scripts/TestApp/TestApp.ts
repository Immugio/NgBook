import { bootstrap } from "angular2/platform/browser";
import { Component } from "angular2/core"

@Component({
    selector: "test-app",
    templateUrl: "test-app.html"
})
class TestApp {

    constructor() {

    }
}

bootstrap(TestApp);