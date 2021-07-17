import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  config: any;
  projects = [
    {
      id: 1,
      title: 'Leo Cleaning Demo',
      desc: 'A startup website of a cleaner company. Conducted from collecting requirements, designing, developing to presenting the demo to customer.',
      livedemo: 'https://wonderful-elion-2b36c2.netlify.app/',
      githurl: 'https://github.com/khangdo2019/leo-cleaning',      
      imgUrl: 'assets/images/leo-cleaning-website.JPG',
      tech: 'HTML5 , CSS3, JavaScript, Figma'
    },

    {
      id: 2,
      title: 'Calendar App',
      desc: 'A responsive web application to display monthly calendar.',
      livedemo: 'https://wonderful-nobel-a1d0a5.netlify.app/',
      githurl: 'https://github.com/khangdo2019/calender-app',      
      imgUrl: 'assets/images/calendar-app.JPG',
      tech: 'HTML5 , CSS3, JavaScript'
    },


    {
      id: 3,
      title: 'Media Store Invoice',
      desc: 'A front end shop invoice used JavaScript to validate the user input and display an invoice',
      livedemo: 'https://competent-keller-b4e0f9.netlify.app/',
      githurl: 'https://github.com/khangdo2019/Shop-Invoice-Frontend',      
      imgUrl: 'assets/images/media-store.JPG',
      tech: 'HTML5 , CSS3, JavaScript'
    },

    

  ]
  constructor() { }

  ngOnInit() {
    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.projects.length
    };
  }

  pageChanged(event){
    this.config.currentPage = event;
  }
}
