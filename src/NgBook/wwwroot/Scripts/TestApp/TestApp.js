var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "angular2/platform/browser", "angular2/core"], function (require, exports, browser_1, core_1) {
    "use strict";
    var TestApp = (function () {
        function TestApp() {
        }
        TestApp = __decorate([
            core_1.Component({
                selector: "test-app",
                templateUrl: "test-app.html"
            })
        ], TestApp);
        return TestApp;
    }());
    browser_1.bootstrap(TestApp);
});
