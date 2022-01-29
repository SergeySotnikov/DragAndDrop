import { Component } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  allSkills = [
    {
      skill: "Angular",
      imgSRC:
        "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/344/external-angular-a-typescript-based-open-source-web-application-framework-logo-shadow-tal-revivo.png"
    },
    {
      skill: "Vue",
      imgSRC:
        "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/367_Vuejs_logo-512.png"
    },
    {
      skill: "React",
      imgSRC: "https://cdn-icons-png.flaticon.com/512/1260/1260667.png"
    },
    {
      skill: "JavaScript",
      imgSRC: "https://cdn-icons-png.flaticon.com/512/1199/1199124.png"
    },
    {
      skill: "HTML",
      imgSRC: "https://cdn-icons-png.flaticon.com/512/888/888859.png"
    },
    {
      skill: "CSS",
      imgSRC: "https://cdn-icons-png.flaticon.com/512/888/888847.png"
    }
  ];

  studentSkill = [];

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
  showSkillList = [];
  save() {
    this.showSkillList = JSON.parse(JSON.stringify(this.studentSkill));

    this.showSkillList.forEach((obj) => {
      delete obj.imgSRC;
      return obj;
    });
  }
}
