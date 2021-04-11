import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  inputValue: string = '';
  enterServer: boolean = false;
  serverCreationStatus: string = '';

  onServerCreation()
  {
    this.serverCreationStatus = 'Server is created';
  }


  constructor() {
    this.serverIsEnabled();
   }


   serverIsEnabled ()
   {
     setTimeout(() => {
       this.enterServer = true;
     }, 2000);

   }
  ngOnInit(): void {
  }

}
