import {Component} from 'angular2/core';
import {CourseComponent} from './courses/courses.component'

@Component({
    selector: 'my-app',
    template: '<h1>Angular</h1><courses></courses>',
    directives: [CourseComponent]
})
export class AppComponent { }