"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CoursesComponent = void 0;
var core_1 = require("@angular/core");
var CoursesComponent = /** @class */ (function () {
    function CoursesComponent() {
        this.courseList = ['Angular', 'React', 'Vue'];
    }
    CoursesComponent.prototype.makeUpper = function () {
        return this.courseList.map(function (e) { return e.toUpperCase(); });
    };
    CoursesComponent = __decorate([
        (0, core_1.Component)({
            selector: 'courses',
            template: "\n        <div>\n            <h1>List of courses</h1>\n            <ul>\n                <li *ngFor=\"let c of makeUpper()\">\n                    {{c}}\n                </li>\n            </ul>\n        </div>\n    "
        })
    ], CoursesComponent);
    return CoursesComponent;
}());
exports.CoursesComponent = CoursesComponent;
