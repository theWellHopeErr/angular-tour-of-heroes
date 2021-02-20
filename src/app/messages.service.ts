import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  constructor() {}
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    console.log(this.messages);
    this.messages = [];
    console.log(this.messages);
  }
}
