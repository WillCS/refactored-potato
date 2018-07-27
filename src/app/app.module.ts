import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { CreatePollComponent } from './create-poll/create-poll.component';
import { PollComponent } from './poll/poll.component';

const routes: Routes = [
  {
    path: 'poll/:id',
    component: PollComponent
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
    PollComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
