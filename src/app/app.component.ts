import { Component, AfterViewInit , ViewContainerRef, ViewChild, ComponentFactoryResolver} from '@angular/core';
import { AT02Component } from './at02/at02.component';

@Component({
  selector: 'app-tag',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{  
  @ViewChild('dynamicInsert', { read: ViewContainerRef }) 
  dynamicInsert: ViewContainerRef;
  constructor(
    private factoryResolver: ComponentFactoryResolver

  ) {
    
   }
   ngAfterViewInit(): void {
    const componentFactory = this.factoryResolver.resolveComponentFactory(AT02Component);
    console.log(this.dynamicInsert);
    this.dynamicInsert.clear();
    const dynamicComponent = <AT02Component> (this.dynamicInsert.createComponent(componentFactory).instance);
   }

}

