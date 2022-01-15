import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, 
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
OnInit, 
OnChanges, 
DoCheck, 
AfterContentInit,  
AfterContentChecked,
AfterViewChecked,
AfterViewInit, 
OnDestroy,
ViewChild
  {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;

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

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
  }

  ngDoCheck(): void {
      console.log('ngDoCheck called!')
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called!')
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called!')
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called!')
    console.log('Text Content: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called!')
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called!')
  }


}
