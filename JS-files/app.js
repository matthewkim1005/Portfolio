// import { projects } from './projects.js'
const { Projects } = require('./projects.js');

function render() {
    //create the grid
      for (let r = 0; r < 5; r++) {
        for (let c = 0; c < 5; c++) {
          //creates a div for each row and column
          const project = document.createElement('div');
          project.classList.add('project');
          projectGrid.appendChild(project);
      }
    }
  }