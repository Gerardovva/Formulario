import { Component } from '@angular/core';

interface MenuItem{
  title:string;
  route:string;
}

@Component({
  selector: 'shared-side-menu',
  templateUrl: './side-menu.component.html',
 
})
export class SideMenuComponent {

  public reactiveMenu:MenuItem[]=[
    { title:'Básicos',route:'./reactive/basic'},
    { title:'Dimanicos',route:'./reactive/dynamic'},
    { title:'Switches',route:'./reactive/switches'},
   ];

   public authMenu:MenuItem[]=[
    { title:'Registro',route:'./auth'},
   
   ];



}
