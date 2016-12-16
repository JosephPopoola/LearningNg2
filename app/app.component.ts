import {Component} from 'angular2/core';
import {CourseComponent} from './courses/courses.component'
import {AuthorComponent} from './authors/authors.component'

@Component({
    selector: 'my-app',
    template: '<h1>Angular</h1><courses></courses><authors></authors>',
    directives: [CourseComponent, AuthorComponent]
})
export class AppComponent { }