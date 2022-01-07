import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output('sCreated') serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  //Do not need these properties any more because I used a local reference in the html file. 
  // newServerName = '';
     newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement){
    console.log(nameInput.value)
    this.serverCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.newServerContent});
  }

  onAddBlueprint(nameInput: HTMLInputElement){
    this.blueprintCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.newServerContent});
  }


}
