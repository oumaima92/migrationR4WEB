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
   //Prérequis : le nom du jsp (exemple AT02)
   //Tache: Comment charger dynamiquement les components (exemple component at01 et at02) à partir du nom su sp (string)
   ngAfterViewInit(): void {
    const componentFactory = this.factoryResolver.resolveComponentFactory(AT02Component);
    console.log(this.dynamicInsert);
    this.dynamicInsert.clear();
    const dynamicComponent = <AT02Component> (this.dynamicInsert.createComponent(componentFactory).instance);
   }

}

