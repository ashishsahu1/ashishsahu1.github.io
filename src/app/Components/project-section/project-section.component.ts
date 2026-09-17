import { Component } from '@angular/core';

@Component({
  selector: 'app-project-section',
  templateUrl: './project-section.component.html',
  styleUrls: ['./project-section.component.css'],
})
export class ProjectSectionComponent {
  featured = [
    {
      name: 'AskLEA',
      meta: 'Enterprise GenAI assistant — conversational access to enterprise knowledge, workflows and decision support at H&M Group.',
      tags: ['LLMs', 'RAG', 'AI Agents', 'MCP'],
    },
    {
      name: 'Fabric Costing Tool',
      meta: 'Mission-critical costing platform processing 1,200–1,500+ daily requests for global sourcing teams.',
      tags: ['Angular', 'Node.js', 'Enterprise'],
    },
    {
      name: 'LEA UI',
      meta: 'Modular micro-frontend platform enabling independent deployments across enterprise applications.',
      tags: ['Micro-Frontend', 'TypeScript', 'REST'],
    },
    {
      name: 'Supplier Recommendation',
      meta: 'Bottom-up, AI-driven supplier ranking with explainable confidence scoring and decision support.',
      tags: ['AI/ML', 'Python', 'Ranking'],
    },
  ];

  projects: any = [
    {
      image:
        'https://user-images.githubusercontent.com/52550558/216713967-a02dafb1-93b0-4e20-8a62-2366946880f4.png',
      title: 'EM System',
      summary: 'Full Stack Management System',
      desc: "The 👩🏻‍💻🖥️ Employee Management System is a web application that allows companies to easily manage and organize their employees' information. The system is built using ASP.NET 6 Web API and Angular, making it fast and efficient, while also providing a user-friendly interface.",
      github: 'https://github.com/ProjectYard/Employee-Management-System',
      deployed: '',
      tags: ['Full-Stack', 'Backend', 'Frontend', 'api', 'Angular', 'All'],
    },
    {
      image:
        'https://github.com/ashishsahu1/Popcorn/assets/52550558/49e94b80-ae56-494d-8cec-4a6ca1411119',
      title: 'Popcorn',
      summary: 'Movie Listing Application 🍿',
      desc: 'Popcorn is a cutting-edge movie listing application developed using the latest Next.js framework, built on top of React. It leverages the powerful features of Next.js, a popular server-side rendering (SSR) framework, to provide a seamless user experience. With Next.js, Popcorn combines the best of both worlds by offering dynamic and responsive web pages with server-side rendering capabilities.',
      github: 'https://github.com/ashishsahu1/Popcorn',
      deployed: '',
      tags: ['Frontend', 'React', 'UI/UX', 'Responsive-UI', 'All'],
    },
    {
      image:
        'https://user-images.githubusercontent.com/52550558/143071480-bc89174f-a6e7-467b-9997-f30c913b7cb4.png',
      title: 'AIRA',
      summary: 'Personal resume bot 👾',
      desc: 'AIRA is my personal AI based Resume Bot which can talk about me (Ashish) and provide important informations. AIRA is also enchanced with conversation intents to make the conversation feel more natural.',
      github: 'https://github.com/ashishsahu1/A.I.R.A',
      deployed: '',
      tags: ['ML', 'Python', 'NLP', 'Frontend', 'All'],
    },
    {
      image:
        'https://user-images.githubusercontent.com/52550558/219687656-4c9eefe4-4321-492b-9ef1-1bbd2e287595.png',
      title: 'Hostinger-Redesign',
      summary: '☘️ Hostinger Redesiged',
      desc: "Redesign of Hostinger website to enhance its functionality, visual appeal, and overall user experience. This redesign project will focus on creating a modern and sleek design, streamlining the navigation and user flow, improving the site's loading speed and performance, and ensuring optimal compatibility across a wide range of devices and platforms.",
      github: 'https://github.com/ashishsahu1/Hostinger-Redesign',
      deployed: 'https://spiffy-strudel-201483.netlify.app/',
      tags: ['Frontend', 'React', 'UI/UX', 'Responsive-UI', 'All'],
    },

    {
      image:
        'https://user-images.githubusercontent.com/52550558/219694486-b3cf535f-7d51-4586-aa24-9f05c8fdcadb.png',
      title: 'Corp-Classfieds',
      summary: 'Corporate Classifieds🧑🏻‍💼',
      desc: 'An organization has to create an Classifieds App for its employees to allow posting of ads on a particular product that the employees can buy and sell within the employee community. The employee who posts an offer in Classifieds Application is a seller and an employee who shows interest is a consumer',
      github: 'https://github.com/aowashim/corp-classf',
      deployed: '',
      tags: [
        'Full-Stack',
        'C-sharp',
        'DotNet',
        'Frontend',
        'Backend',
        'React',
        'All',
      ],
    },
    {
      image:
        'https://user-images.githubusercontent.com/52550558/141929566-e9c0abc7-ccb4-48d7-b55c-b167a3cbf198.png',
      title: 'Java-Mate',
      summary: 'Java ChatBot',
      desc: 'Chat Bot using python and Natural Language Processing (NLP) techniques which help learners by answering with common queries with respect to Java Programming Language. This Chat bot will handle queries related to Basics of Java, Datatypes, Syntax, Different errors, different exceptions, best practices and other important topics (If else, Loops, Functions, arrays, 2D arrays, classes and objects, collections in Java, frequent errors, exception handling and more)',
      github: 'https://github.com/ashishsahu1/JAVA-Mate',
      deployed: '',
      tags: ['ML', 'Python', 'NLP', 'Frontend', 'All'],
    },
    {
      image:
        'https://user-images.githubusercontent.com/52550558/226741813-b8a94aca-18b7-4434-a222-a82c6afed9e2.png',
      title: 'Tales',
      summary: 'A 👾Pseudonymous Blogger',
      desc: 'Tales is a blogging website created using MERN stack, which includes MongoDB, Express.js, React.js, and Node.js. The use of a pseudonym allows users to maintain anonymity while sharing their stories and experiences on the platform.',
      github: 'https://github.com/ProjectYard/Tales-MicroBlogging-site',
      deployed: '',
      tags: ['Full-Stack', 'Backend', 'Frontend', 'api', 'React', 'All'],
    },
    {
      image:
        'https://user-images.githubusercontent.com/52550558/138639140-8141780a-52de-420f-8b7b-5325e34623da.png',
      title: 'Green Portfolio',
      summary: 'Portfolio Website',
      desc: 'The beautiful green portfolio website is a stunning online platform designed to showcase the work and accomplishments of a creative professional. With its elegant and minimalist design, the website features a green color scheme that exudes a sense of freshness, vibrancy, and creativity. The site is organized in a clean and user-friendly manner, with a simple menu that enables visitors to easily navigate through the various pages and sections. ',
      github: 'https://github.com/ashishsahu1/portfolio-green',
      deployed: '',
      tags: ['Frontend', 'UI/UX', 'All'],
    },
    {
      image:
        'https://user-images.githubusercontent.com/52550558/219697874-284a31ea-b186-49f0-96b7-275d611f7ade.png',
      title: 'Project-Yard',
      summary: 'Machine Learning Repo',
      desc: 'This is the one-stop open-source destination for all the projects based on Machine Learning, Deep Learning, NLP,Computer Vision and everything includes frontend and backend. All these projects are deployable ready and are very beginner-friendly. These are the projects that would help you master the ML/AI algorithms and make you a pro! ',
      github: 'https://github.com/ashishsahu1/ML-ProjectYard',
      deployed: '',
      tags: ['ML', 'Frontend', 'Backend', 'Repo', 'All'],
    },
    {
      image:
        'https://user-images.githubusercontent.com/52550558/219699356-9bafb2c1-a3e5-46c9-847b-1d2ba2b5b742.png',
      title: 'Right House',
      summary: 'Real Estate Price Prediction',
      desc: 'RightHouse is a Real Estate Price prediction webapp which uses regression model to predict housing price of different cities based on different parameters.',
      github: 'https://github.com/ashishsahu1/Right-House',
      deployed: '',
      tags: ['ML', 'Frontend', 'Backend', 'All'],
    },
    {
      image:
        'https://user-images.githubusercontent.com/52550558/219700667-7dcfb405-7ef1-482a-9867-61a439cef4ba.png',
      title: "Let's Talk",
      summary: 'Android Chat App',
      desc: 'Lets Talk is an android online chat application Using Flutter we can build this application easily One can easily use this application for conversation purpose',
      github: 'https://github.com/ashishsahu1/Lets-Talk',
      deployed: '',
      tags: ['Flutter', 'Android', 'All'],
    },
    {
      image:
        'https://user-images.githubusercontent.com/52550558/219701576-c75debdc-66fd-461a-9af3-e61e6d481564.png',
      title: 'Car Choice',
      summary: 'Car Price Prediction App',
      desc: 'Car-Choice is a old car price prediction web app. This web app takes inputs like distance traveled, age, current market price from the user and then predict the estimated selling price.',
      github: 'https://github.com/ashishsahu1/carChoice',
      deployed: 'usedcar-pred.herokuapp.com/',
      tags: ['ML', 'Frontend', 'Backend', 'All'],
    },
    {
      image:
        'https://user-images.githubusercontent.com/52550558/219702344-78da48c1-e9db-4976-82df-059326208e4e.png',
      title: 'Weather Dashboard',
      summary: 'Weather predicting App',
      desc: 'The Weather app using Flask is a web-based application that provides users with real-time weather information for any location in the world. The app is built using Flask, a popular Python web framework that is known for its simplicity and flexibility. The app features a clean and user-friendly interface that allows users to enter any location they want to check the weather for.',
      github: 'https://github.com/ashishsahu1/Weather-Dashboard',
      deployed: '',
      tags: ['Frontend', 'Backend', 'api', 'All'],
    },
    {
      image:
        'https://user-images.githubusercontent.com/52550558/219703603-2f78e145-47bb-46ea-80f8-26dcb400f219.png',
      title: 'Search Wiki',
      summary: 'Searching Web App',
      desc: 'Search-Wiki is a seacrh engine webapp which uses api to find wikipedia summary and also uses web image scrapping technique to scrap images from the web and display it',
      github: 'https://github.com/ashishsahu1/Search-Wiki',
      deployed: '',
      tags: ['Backend', 'Frontend', 'Python', 'All'],
    },
    {
      image:
        'https://user-images.githubusercontent.com/52550558/219691984-b4d4895d-a63f-4d61-af5e-522056da4037.png',
      title: 'Todo-API',
      summary: 'Simple Todo API 👾',
      desc: 'An API project to handle todos using ASP .NET WebApi. It can get,post,put,delete todos from SQL database. Proper code flow, security and testing functionality implemented.',
      github: 'https://github.com/ashishsahu1/TodoApi',
      deployed: '',
      tags: ['Backend', 'C-sharp', 'api', 'DotNet', 'All'],
    },
    {
      image:
        'https://user-images.githubusercontent.com/52550558/219714393-3659fa05-f4f3-4cff-9b20-a30c434b5a11.png',
      title: 'I-Tube',
      summary: 'Youtube Clone',
      desc: 'A YouTube clone build on ReactJS with Rapid API open sourced YouTube API which is free to use. ITube is a youtube clone built on top of react as framework',
      github: 'https://github.com/ProjectYard/I-TUBE',
      deployed: '',
      tags: ['Frontend', 'api', 'React', 'All'],
    },
    {
      image:
        'https://user-images.githubusercontent.com/52550558/138594347-033f8df3-6056-4d91-9aac-08c6b83fd5f9.png',
      title: 'Snake Take',
      summary: 'Snake Game',
      desc: 'SnakeTake is a snake building game which is build using HTML, css and javascript. In this game players will help a snake to eat and grow. A time-pass game which is simple and beautiful.',
      github: 'https://github.com/ProjectYard/SnakeTake',
      deployed: 'projectyard.github.io/SnakeTake/',
      tags: ['Frontend', 'Game', 'All'],
    },
    {
      image:
        'https://user-images.githubusercontent.com/52550558/219718423-27b40ca2-b144-4351-8499-eb84fec21478.png',
      title: 'CPP Essentials',
      summary: 'C++ Repository ',
      desc: 'A repository which have many C++ source code. These code includes different Data structures and algorithm code. These codes are well structured and commented.',
      github: 'https://github.com/ashishsahu1/CPP-Essentials',
      deployed: '',
      tags: ['Repo', 'All'],
    },
  ];

  checkBX: any = [
    {
      id: 'ML',
      type: 'checkbox',
    },
    {
      id: 'Python',
      type: 'checkbox',
    },
    {
      id: 'NLP',
      type: 'checkbox',
    },
    {
      id: 'Frontend',
      type: 'checkbox',
    },
    {
      id: 'React',
      type: 'checkbox',
    },
    {
      id: 'UI/UX',
      type: 'checkbox',
    },
    {
      id: 'Responsive-UI',
      type: 'checkbox',
    },
    {
      id: 'Backend',
      type: 'checkbox',
    },
    {
      id: 'api',
      type: 'checkbox',
    },
    {
      id: 'C-sharp',
      type: 'checkbox',
    },
    {
      id: 'Full-Stack',
      type: 'checkbox',
    },
    {
      id: 'Angular',
      type: 'checkbox',
    },
    {
      id: 'Flutter',
      type: 'checkbox',
    },
    {
      id: 'DotNet',
      type: 'checkbox',
    },
    {
      id: 'Android',
      type: 'checkbox',
    },
    {
      id: 'Repo',
      type: 'checkbox',
    },
    {
      id: 'Game',
      type: 'checkbox',
    },
  ];

  finalData: any = [];

  isTagPresent(tagArr: string[], tag: string) {
    for (let i = 0; i < tagArr.length; i++) {
      if (tagArr[i] == tag) return true;
    }
    return false;
  }

  isTagPresent2(tagArr: string[], tag: string) {
    for (let i = 0; i < tagArr.length; i++) {
      if (tagArr[i] == tag) return true;
    }
    return false;
    
  }

  isPres: boolean = false;

  isItemPresent(item: any) {
    this.finalData.forEach((proj: any) => {
      if (proj.title === item.title) {
        console.log(proj.title + ' ' + item.title);
        this.isPres = true;
      }
    });
  }

  removeDuplicates(arr: any) {
    return [...new Set(arr)];
  }

  onChange(event: any) {
    if (event.target.checked) {
      this.projects.forEach((item: any) => {
        if (this.isTagPresent(item.tags, event.target.value)) {
          this.finalData.push(item);
        }
      });
    } else {
      this.finalData.forEach((item: any) => {
        if (this.isTagPresent(item.tags, event.target.value)) {
          this.finalData = this.finalData.filter(
            (remDt: any) => remDt !== item
          );
        }
      });
    }
    this.finalData = this.removeDuplicates(this.finalData);
  }

  allBtn: boolean = false;

  ngOnInit() {
    this.allBtn = true;
    console.log(this.allBtn);
  }
}
