import { Routes } from '@angular/router';
import { LandingPage } from './components/landing-page/landing-page';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
    {
        path: "",
        component: LandingPage,
        pathMatch: "full"
    }, {
        path: "about",
        component: About
    }, {
        path: "contact",
        component: Contact
    }
];
