import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CondidateDistributionComponent } from './dashboard/condidate-distribution/condidate-distribution.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CondidatesComponent } from './dashboard/condidates/condidates.component';
import { NewRequirementsComponent } from './dashboard/new-requirements/new-requirements.component';
import { QuickActionComponent } from './dashboard/quick-action/quick-action.component';
import { SubscriptionDistributionComponent } from './dashboard/subscription-distribution/subscription-distribution.component';
import { UserDistributionComponent } from './dashboard/user-distribution/user-distribution.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'condidate', component: CondidatesComponent },
  { path: 'new-requirements', component: NewRequirementsComponent },
  { path: 'quick-actions', component: QuickActionComponent },
  { path: 'subscriptions', component: SubscriptionDistributionComponent },
  { path: 'condidate-distribution', component: CondidateDistributionComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'condidate', component: CondidatesComponent },
      { path: 'new-requirements', component: NewRequirementsComponent },
      { path: 'quick-actions', component: QuickActionComponent },
      { path: 'subscriptions', component: SubscriptionDistributionComponent },
      { path: 'user-distribution', component: UserDistributionComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
