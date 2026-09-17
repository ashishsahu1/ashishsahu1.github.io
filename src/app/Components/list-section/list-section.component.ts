import { Component } from '@angular/core';

interface Skill {
  name: string;
  icon?: string;
}

interface SkillCategory {
  title: string;
  items: Skill[];
}

@Component({
  selector: 'app-list-section',
  templateUrl: './list-section.component.html',
  styleUrls: ['./list-section.component.css'],
})
export class ListSectionComponent {
  categories: SkillCategory[] = [
    {
      title: 'Frontend',
      items: [
        { name: 'Angular (v14–v19)', icon: 'devicon-angularjs-plain' },
        { name: 'TypeScript', icon: 'devicon-typescript-plain' },
        { name: 'JavaScript (ES6+)', icon: 'devicon-javascript-plain' },
        { name: 'React', icon: 'devicon-react-original' },
        { name: 'HTML5', icon: 'devicon-html5-plain' },
        { name: 'CSS3 / SCSS', icon: 'devicon-sass-original' },
      ],
    },
    {
      title: 'Backend',
      items: [
        { name: 'Node.js', icon: 'devicon-nodejs-plain' },
        { name: 'Express.js', icon: 'devicon-express-original' },
        { name: 'Python', icon: 'devicon-python-plain' },
        { name: 'FastAPI', icon: 'devicon-fastapi-plain' },
        { name: 'ASP.NET Core', icon: 'devicon-dotnetcore-plain' },
        { name: 'Flask · REST APIs', icon: 'devicon-flask-original' },
      ],
    },
    {
      title: 'AI / GenAI',
      items: [
        { name: 'Azure OpenAI · LLMs' },
        { name: 'RAG · Semantic Search' },
        { name: 'AI Agents · MCP' },
        { name: 'Prompt Engineering' },
        { name: 'TensorFlow', icon: 'devicon-tensorflow-original' },
        { name: 'PyTorch', icon: 'devicon-pytorch-original' },
      ],
    },
    {
      title: 'Cloud & DevOps',
      items: [
        { name: 'Azure', icon: 'devicon-azure-plain' },
        { name: 'AWS', icon: 'devicon-amazonwebservices-original' },
        { name: 'Google Cloud', icon: 'devicon-googlecloud-plain' },
        { name: 'Docker', icon: 'devicon-docker-plain' },
        { name: 'Git · GitHub', icon: 'devicon-git-plain' },
        { name: 'CI/CD Pipelines' },
      ],
    },
    {
      title: 'Databases',
      items: [
        { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
        { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
        { name: 'SQL Server', icon: 'devicon-microsoftsqlserver-plain' },
        { name: 'MySQL', icon: 'devicon-mysql-plain' },
        { name: 'Firebase', icon: 'devicon-firebase-plain' },
      ],
    },
    {
      title: 'Architecture',
      items: [
        { name: 'Microservices' },
        { name: 'Micro-Frontend' },
        { name: 'Distributed Systems' },
        { name: 'Event-Driven Design' },
        { name: 'System Design' },
        { name: 'RESTful APIs' },
      ],
    },
  ];
}
