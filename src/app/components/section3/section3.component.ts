import { NetlifyService } from './../../service/netlify/netlify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.css']
})
export class Section3Component implements OnInit {

  netlifyProyects: any
  startProyects: any
  finalProyects: any

  constructor(
    private NetlifyService: NetlifyService
  ) { }

  async ngOnInit(): Promise<void> {
    this.netlifyProyects = await this.NetlifyService.getMyDeply().toPromise()
    this.startProyects = this.netlifyProyects[0]
    this.finalProyects = this.netlifyProyects.slice(1)
  }

}
