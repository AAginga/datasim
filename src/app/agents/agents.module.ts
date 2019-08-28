import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentsComponent } from './agents.component';
import { AgentseditComponent} from './agentsedit.component';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const routes: Routes = [
  {
    path: '',
    data: {
          title: 'Agents',
          urls: [{title: 'Agents',url: '/agents'},{title: 'Agents'}]
      },
    component: AgentsComponent
  },{
    path: ':mode',
    data: {
          title: 'Create Agent',
          urls: [{title: 'Agents',url: '/agents'},{title: 'Create Agent'}]
      },
    component: AgentseditComponent
 },{
    path: ':mode/:id',
    data: {
          title: 'Edit Agent',
          urls: [{title: 'Agents',url: '/agents'},{title: 'Edit Agent'}]
      },
    component: AgentseditComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule
  ],
  declarations: [AgentsComponent,AgentseditComponent]
})
export class AgentsModule { }







