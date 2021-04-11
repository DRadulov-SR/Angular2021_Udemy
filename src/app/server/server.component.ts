import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'Offline';
    allowNewServer: boolean;
    serverCreationalStatus: string = "No servis created";

constructor()
{
    this.allowNewServer = false;
    setTimeout(() => {
        this.allowNewServer = true;
    }, 2000);
}

    getServerStatus(): string {
        return this.serverStatus;
    }

    onServerCreated()
    {
        this.serverCreationalStatus = 'Server is created';
    }
}