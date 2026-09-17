import { Component } from '@angular/core';

@Component({
  selector: 'app-exp-section',
  templateUrl: './exp-section.component.html',
  styleUrls: ['./exp-section.component.css'],
})
export class ExpSectionComponent {
  exp = [
    {
      firm: 'H&M Group',
      title: 'Software Developer',
      theme: 'GenAI Enablement & Intelligent Platforms',
      points: [
        'Architected AskLEA, an enterprise GenAI assistant using LLMs, AI agents, RAG, MCP and tool orchestration for conversational access to enterprise knowledge and workflows.',
        'Built a dynamic LLM-driven multi-agent orchestration framework, replacing rigid intent routing with autonomous multi-step execution across enterprise systems.',
        'Delivered and enhanced the Fabric Costing Tool (FCT) processing 1,200–1,500+ daily requests, and engineered the LEA UI on a micro-frontend architecture.',
      ],
      sdate: 'Jun 2025',
      edate: 'Present',
    },
    {
      firm: 'Cognizant',
      title: 'Full Stack Developer',
      theme: 'Enterprise Platforms · Bengaluru, India',
      points: [
        'Rebuilt OneC 3.0 with a 20-member team using Angular 17 micro-frontends, Node.js, .NET Web APIs, MongoDB and Azure — scaling to 200K+ daily active users and 100M+ monthly reads.',
        'Delivered 40+ features and resolved 70+ defects on a Telecommunications Certification Body (TCB) platform with Angular and Material UI.',
        'Trained on modern full-stack technologies as a GenC Next intern before moving into core delivery.',
      ],
      sdate: 'Feb 2022',
      edate: 'May 2025',
    },
  ];
}
