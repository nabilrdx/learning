import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector:'courses',
    template: `
        <div>
            <h1>List of courses</h1>
            <ul>
                <li *ngFor="let c of courseList">
                    {{c}}
                </li>
            </ul>
        </div>
    `
})
export class CoursesComponent{
    courseList:string[];
    constructor(service: CoursesService){
        // let service = new CoursesService();
        this.courseList = service.makeUpper()
    }
    
    
}