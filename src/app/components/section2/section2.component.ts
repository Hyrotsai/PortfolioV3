import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css']
})
export class Section2Component implements OnInit {

  skills: Object = {
    html: 75,
    css: 70,
    js: 85,
    git: 80,
    bootstrap: 80,
    angular: 85,
    react: 75,
    node: 70,
    mongodb: 65
  }
  skillResult = {
    name: '',
    value: 0
  }
  showSkills: Boolean = false
  iterableSkills: any

  imageObject: Array<any> = [
    {
      thumbImage: 'assets/skills/html.png',
      alt: 'alt of image',
      title: 'HTML'
    },
    {
      thumbImage: 'assets/skills/css.png',
      alt: 'alt of image',
      title: 'CSS'
    },
    {
      thumbImage: 'assets/skills/js.png',
      alt: 'alt of image',
      title: 'JavaScript'
    },
    {
      thumbImage: 'assets/skills/git.png',
      alt: 'alt of image',
      title: 'Git'
    },
    {
      thumbImage: 'assets/skills/bootstrap.png',
      alt: 'alt of image',
      title: 'Bootstrap'
    },
    {
      thumbImage: 'assets/skills/angular.png',
      alt: 'alt of image',
      title: 'Angular'
    },
    {
      thumbImage: 'assets/skills/react.png',
      alt: 'alt of image',
      title: 'React'
    },
    {
      thumbImage: 'assets/skills/node.png',
      alt: 'alt of image',
      title: 'Node'
    },
    {
      thumbImage: 'assets/skills/mongodb.png',
      alt: 'alt of image',
      title: 'MongoDB'
    }
  ];

  constructor() {
    this.iterableSkills = Object.keys(this.skills)
  }

  ngOnInit(): void {
  }

  showPorcent(skill: any) {
    if (this.skillResult.name.toLowerCase() == skill) {
      if (this.showSkills == false) return this.showSkills = true
      return this.showSkills = false
    }

    const data: any = Object.entries(this.skills).find(data => data[0] === skill)
    this.skillResult.name = this.firstLetterCapital(data[0])
    this.skillResult.value = data[1]
    return this.showSkills = true
  }

  firstLetterCapital(skill: string) {
    const firstChar = skill.charAt(0);
    const upperCaseFirstChar = firstChar.toUpperCase();
    const restOfString = skill.slice(1);
    const capitalizedString = upperCaseFirstChar + restOfString;

    return capitalizedString;
  }

  showGraphic(index: any) {
    if (this.showSkills == false) {
      this.skillResult.value = Object.values(this.skills)[index]
      this.skillResult.name = this.imageObject[index].title
      return this.showSkills = true
    }
    return this.showSkills = false
  }
}
