import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Guards
import { LoggedGuard } from './guards/logged.guard';
import { AuthGuard } from './guards/auth.guard';

// Components
import { LoginComponent } from './components/login/login.component';
import { DragonsListComponent } from './components/dragons-list/dragons-list.component';
import { DragonDetailComponent } from './components/dragon-detail/dragon-detail.component';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [LoggedGuard] },
  { path: 'home', component: DragonsListComponent, canActivate: [AuthGuard] },
  { path: 'dragon/:id', component: DragonDetailComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
