import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CondidatesComponent } from './condidates/condidates.component';
import { UserDistributionComponent } from './user-distribution/user-distribution.component';
import { SubscriptionDistributionComponent } from './subscription-distribution/subscription-distribution.component';
import { CondidateDistributionComponent } from './condidate-distribution/condidate-distribution.component';
import { NewRequirementsComponent } from './new-requirements/new-requirements.component';
import { QuickActionComponent } from './quick-action/quick-action.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';



@NgModule({
  declarations: [
    CondidatesComponent,
    UserDistributionComponent,
    SubscriptionDistributionComponent,
    CondidateDistributionComponent,
    NewRequirementsComponent,
    QuickActionComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class DashboardModule { }
