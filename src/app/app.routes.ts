import { Routes } from '@angular/router';
import { StartpageComponent } from './component/startpage/startpage.component';
import { FrontendComponent } from './component/frontend/frontend.component';
import { BackendComponent } from './component/backend/backend.component';
import { ImpressumComponent } from './component/impressum/impressum.component';
import { LoginComponent } from './component/login/login.component';
import { InformationComponent } from './component/information/information.component';
import { PrivacyPolicyComponent } from './component/privacy-policy/privacy-policy.component';

export const routes: Routes = [
    { path: '', component: StartpageComponent, title: 'Björn Zimmer' },
    { path: 'start', component: StartpageComponent, title: 'Björn Zimmer' },
    { path: 'frontend', component: FrontendComponent, title: 'Björn Zimmer - Frontend' },
    { path: 'backend', component: BackendComponent, title: 'Björn Zimmer - Backend' },
    { path: 'privacy-policy', component: PrivacyPolicyComponent, title: 'Björn Zimmer - Privacy policy' },
    { path: 'impressum', component: ImpressumComponent, title: 'Björn Zimmer - Impressum' },
    { path: 'information', component: InformationComponent, title: 'Björn Zimmer - Information' },
    { path: 'login', component: LoginComponent, title: 'Björn Zimmer - Login' },
    { path: '**', component: StartpageComponent, title: 'Björn Zimmer' },

];
