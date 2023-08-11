import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css']
})
export class Section1Component implements OnInit {

  name: String = 'Luis Rodriguez'
  job: String = 'FrontEnd Developer'
  index: any = 0;
  resultName: String = ''
  resultJob: String = ''
  stopAnimation: any
  intervalTime = 80

  constructor() { }

  ngOnInit(): void {
    this.stopAnimation = setInterval(this.writeName.bind(this, this.name), this.intervalTime);
  }

  writeName(name: any) {
    if (name == this.name) this.resultName = name.slice(0, this.index);
    if (name == this.job) this.resultJob = name.slice(0, this.index);
    this.index++;
    if (this.index > name.length) {
      clearInterval(this.stopAnimation)
      this.stopAnimation = setInterval(this.reversalName.bind(this, name), this.intervalTime)
    }
  }

  reversalName(name: any) {
    if (name == this.name) this.resultName = name.slice(0, this.index);
    if (name == this.job) this.resultJob = name.slice(0, this.index);
    this.index--
    if (this.index < 0) {
      this.index = 0
      clearInterval(this.stopAnimation)
      if (name !== this.job) this.stopAnimation = setInterval(this.writeName.bind(this, this.job), this.intervalTime)
      if (name == this.job) this.stopAnimation = setInterval(this.writeFullName.bind(this), this.intervalTime)
    }
  }

  writeFullName() {
    this.resultName = this.name.slice(0, this.index)
    if (this.index >= this.name.length) this.resultJob = this.job.slice(0, this.index - this.name.length)
    this.index++
    if (this.index > (this.job.length + this.name.length)) clearInterval(this.stopAnimation)
  }

}
