import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.css']
})
export class LangComponent implements OnInit {

  btnIconAnimated: boolean = false
  btnIconAnimated2: boolean = false

  constructor(
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
  }

  public navigateToSection(section: string) {
    window.location.hash = '';
    window.location.hash = section;
  }

  changeLang(lang: any) {
    localStorage.setItem('lang', lang)
    this.translate.use(lang)
  }

  btnIconActive(): void {
    if (this.btnIconAnimated == false) {
      this.btnIconAnimated = !this.btnIconAnimated
      this.btnIconAnimated2 = false
      return
    }
    if (this.btnIconAnimated == true) {
      this.btnIconAnimated = !this.btnIconAnimated
      this.btnIconAnimated2 = true
      return
    }
  }

}
