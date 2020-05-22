using CVStorage.Models;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CVStorage.Hubs
{
    public class MessageHub : Hub
    {
        public async Task SendMessage(string name, string text)
        {
            await Clients.All.SendAsync("ReceivedMessage", name, text);
        }
    }
}
