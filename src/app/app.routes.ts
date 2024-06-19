import { Routes } from '@angular/router';
import { StartpageComponent } from './component/startpage/startpage.component';
import { FrontendComponent } from './component/frontend/frontend.component';
import { BackendComponent } from './component/backend/backend.component';
import { DatabaseComponent } from './component/database/database.component';
import { ImpressumComponent } from './component/impressum/impressum.component';
import { LoginComponent } from './component/login/login.component';
import { InformationComponent } from './component/information/information.component';

export const routes: Routes = [
    { path: '', component: StartpageComponent, title: 'Björn Zimmer' },
    { path: 'start', component: StartpageComponent, title: 'Björn Zimmer' },
    { path: 'frontend', component: FrontendComponent, title: 'Björn Zimmer - Frontend' },
    { path: 'backend', component: BackendComponent, title: 'Björn Zimmer - Backend' },
    { path: 'database', component: DatabaseComponent, title: 'Björn Zimmer - Database' },
    { path: 'impressum', component: ImpressumComponent, title: 'Björn Zimmer - Impressum' },
    { path: 'information', component: InformationComponent, title: 'Björn Zimmer - Information' },
    { path: 'login', component: LoginComponent, title: 'Björn Zimmer - Login' },
    { path: '**', component: StartpageComponent, title: 'Björn Zimmer' },

];
