import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
 
  }


}
