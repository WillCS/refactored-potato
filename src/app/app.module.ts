import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CreatePollComponent } from './create-poll/create-poll.component';
import { PollComponent } from './poll/poll.component';
import { VoteComponent } from './vote/vote.component';
import { PollOptionComponent } from './poll-option/poll-option.component';

const routes: Routes = [
  {
    path: 'poll/:id',
    component: PollComponent
  },
  {
    path: 'vote/:id',
    component: VoteComponent
  },
  {
    path: '**',
    component: CreatePollComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CreatePollComponent,
    PollComponent,
    VoteComponent,
    PollOptionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
