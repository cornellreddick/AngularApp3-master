import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, 
  ContentChild, 
  DoCheck, 
  ElementRef, 
  Input, 
  OnChanges,
  OnDestroy,
  OnInit, 
  SimpleChanges, 
  ViewChild, 
  ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements
OnInit
  {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() { 
    console.log('constructor called!')
  }
  descendants: boolean;
  emitDistinctChangesOnly: boolean;
  first: boolean;
  read: any;
  isViewQuery: boolean;
  selector: any;
  static?: boolean;



  ngOnInit(): void {
  }


}
