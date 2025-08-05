import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Hero } from "../../components/hero/hero";
import { About } from "../../components/about/about";
import { Education } from "../../components/education/education";
import { Skills } from "../../components/skills/skills";
import { Projects } from "../../components/projects/projects";

@Component({
  selector: 'app-home',
  imports: [Hero, About, Education, Skills, Projects],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {


}
