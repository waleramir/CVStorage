import { Component, OnInit } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  private _hubConnection: HubConnection;
  nick = '';
  message = '';
  messages: string[] = [];
  constructor(private toastr: ToastrService) { }

  ngOnInit() {
    this.nick = 'User';

    this._hubConnection = new HubConnectionBuilder().withUrl("http://localhost:50819/chat").build();

    this._hubConnection
      .start()
      .then(() => this.toastr.success('SignalR is working', 'Chat connected', {
        positionClass: 'toast-bottom-right'
      }))
      .catch(err => this.toastr.error('SignalR is failed', 'Connection failed', {
        positionClass: 'toast-bottom-right'
      }));

    this._hubConnection.on('ReceivedMessage', (nick: string, receivedMessage: string) => {
      const text = `${nick}: ${receivedMessage}`;
      this.messages.push(text);
    });
  }

  public sendMessage(): void {
    if (this.message != '')
      this._hubConnection
        .invoke('SendMessage', this.nick, this.message)
        .then(() => this.message = '')
        .catch(err => console.error(err));
  }
}
