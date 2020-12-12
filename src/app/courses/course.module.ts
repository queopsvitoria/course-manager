import { NgModule } from '@angular/core';
import { Course } from './course';
import { CourseInforComponent } from './course-info.component';
import { CourseListComponent } from './course-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StarModule } from '../shared/component/star/star.module';
import { AppPipeModule } from '../shared/pipe/app-pipe.module';

@NgModule({
    declarations: [
        CourseListComponent,
        CourseInforComponent

    ], imports: [
        CommonModule,
        FormsModule,
        StarModule,
        AppPipeModule,
        RouterModule.forChild([
            { 
                path: 'courses', component:CourseListComponent
              
              },
              {
                path : 'courses/info/:id', component: CourseInforComponent
              }
        ])

    ]

})

export class CourseModule  {

}