import { Routes } from '@angular/router';
import { StartpageComponent } from './component/startpage/startpage.component';
import { FrontendComponent } from './component/frontend/frontend.component';
import { BackendComponent } from './component/backend/backend.component';
import { DatabaseComponent } from './component/database/database.component';
import { ImpressumComponent } from './component/impressum/impressum.component';
import { LoginComponent } from './component/login/login.component';

export const routes: Routes = [
    { path: '', component: StartpageComponent },
    { path: 'frontend', component: FrontendComponent },
    { path: 'backend', component: BackendComponent },
    { path: 'database', component: DatabaseComponent },
    { path: 'impressum', component: ImpressumComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', component: StartpageComponent },

];
