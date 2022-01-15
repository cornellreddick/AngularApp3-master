import { ThrowStmt } from '@angular/compiler';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';


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
    //  newServerContent = '';
    @ViewChild('serverContentInput') serverContentIput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement){
    console.log(nameInput.value)
    this.serverCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.serverContentIput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement){
    this.blueprintCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.serverContentIput.nativeElement.value
    });
  }


}
