import { Injectable } from '@angular/core';
import { Course } from './course';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'


@Injectable({
    providedIn: 'root'
})

export class CourseService {

    private courseUrl: string = 'Http://localhost:3100/api/courses';

    constructor(private httpClient: HttpClient) {

    }

    retrieveAll(): Observable<Course[]> {
        return this.httpClient.get<Course[]>(this.courseUrl);
    }

    retrieveById(id: number): Observable<Course> {
    return this.httpClient.get<Course>(`${this.courseUrl}/${id}`);


    }

    save(course: Course): Observable<Course> {
        if(course.id) {


            if (course.id) {
                return this.httpClient.put<Course>(`${this.courseUrl}/${course.id}`,course);
            } else {
                return this.httpClient.post<Course>(`${this.courseUrl}`,course); 
            }
           
        }
    }

    deleteById(id: number): Observable<any> {
        return this.httpClient.delete<any>(`${this.courseUrl}/${id}`);
    }  
}


var COURSES: Course[] = [
    {
        id: 1, 
        name: 'Angular: CLI', 
        releaseDate : 'November 2, 2019',
        description: 'Neste Curso',
        duration: 120,
        code: 'XLF-1212',
        rating: 3,
        price: 12.99,
        imageUrl : '/assets/images/cli.png'
    }
]