import { Routes } from '@angular/router';  
import { Home } from './pages/home/home.component';
import { About } from './pages/about/about.component';
import { Projects } from './pages/projects/projects';
import { Skills } from './pages/skills/skills';
import { Education } from './pages/education/education.component';
import { Contact } from './pages/contact/contact.component';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'home', component: Home},
    {path: 'about', component: About},
    {path: 'projects', component: Projects},
    {path: 'contact', component: Contact},
    {path: 'skills', component: Skills},
    {path: 'education', component: Education},
    {path: '**', redirectTo: 'home'}  
];