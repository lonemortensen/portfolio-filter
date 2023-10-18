/* ====================================================================
Project:  Portfolio Filter Gallery  
Author:  Lone Mortensen
Description:  The Portfolio Filter Gallery displays select web projects. The 
portfolio is filterable so users can select the type of projects 
they want to see by clicking on buttons representing coding languages. The 
filter will show only the projects built with the language selected by the user. 
Built with: JavaScript, HTML5, CSS3, and Flexbox.

===== *** =====

==================================================================== */

/* ===== MODEL ===== */

/* Object stores languages (keys) and associated projects (values): */
const projectData = {};

/**
 * Collects projects and their HTML data attribute values and pushes 
 * the data as key-value pairs to the projectData object for storage.
 */
const getProjectData = () => {  
  const portfolio = document.querySelector(".project-wrapper");
  const portfolioProjects = portfolio.children; // Children property returns an HTMLCollection object 
  const projectsList = Array.from(portfolioProjects); // Turns object into an array to enable use of array methods
  for (let i = 0; i < projectsList.length; i++) {
    let project = projectsList[i]; 
    let languages = project.dataset.language; 
    // Checks if language is already a property in the projectData object
    // - if not, adds the language as a property with a value of an empty array
    // Pairs the language with matching projects and adds to the object:  
    if (languages) {
      languages.split(',').forEach((languageName) => {
        if (projectData[languageName] == null) {
          projectData[languageName] = [];
        }
        projectData[languageName].push(project);
      })
    }
  }
};


/* ===== VIEW ===== */

/* Container for language filter buttons: */
const buttonWrapper = document.querySelector(".language-button-wrapper");

/**
 * Creates HTML filter buttons with language labels and event listeners, 
 * and adds styling to highlight the "All" button.
 * @param languageName the languages used in the projects.
 * @returns a button for each language passed. 
 */
const createButton = (languageName) => {
  let languageButton = document.createElement("button");
  languageButton.innerText = languageName;
  languageButton.classList.add("buttons-style");
  languageButton.addEventListener("click", handleLanguageSelection); 
  buttonWrapper.appendChild(languageButton);
  if (languageName.toLowerCase().trim() == "all") {
    languageButton.classList.add("highlight-button");
  };
  return languageButton;
};


/**
 * Applies styling to initially hide all projects when user clicks a filter button
 * so styling can later be removed to display only the user's selected projects.
 * @param projects the projectData object containing languages (keys) and associated projects (values). 
 */ 
const hideProjects = (projects) => {
  // Loops through the passed object and returns an array with the object values: 
  let hideAllProjects = Object.values(projects);
  hideAllProjects.forEach((projectArray) => {
    for (let i = 0; i < projectArray.length; i++) {
      let list = projectArray[i];
      list.classList.add("hide-projects"); 
    }
  });
};


/**
 * Applies styling to highlight the clicked language filter button.
 * @param languageButtonText the language label (as the html innerText property) of the clicked button.  
 */ 
const highlightButton = (languageButtonText) => {
  let buttons = buttonWrapper.children; // Children property returns an HTMLCollection object 
  let buttonsList = Array.from(buttons); // Turns object into an array to enable use of array methods
  for (let i = 0; i < buttonsList.length; i++) {
    let button = buttonsList[i];
    button.classList.remove("highlight-button");
    if (button.innerText.toLowerCase().trim() == languageButtonText.toLowerCase().trim()) {
      button.classList.add("highlight-button");
    }
  }
};


/** 
 * Applies styling to display only the projects that match the user's selection.
 * @param projects the projects (as select projectData object key-value pairs) that match the 
 * clicked filter button. 
 */
const showSelectedProjects = (projects) => {
  // Loops through the passed object and returns an array of object values:
  let showTheseProjects = Object.values(projects); 
  showTheseProjects.forEach((projectArray) => {
    for (let i = 0; i < projectArray.length; i++) {
      let list = projectArray[i];
      list.classList.remove("hide-projects"); 
    };
  });
};


/* ===== CONTROLLER ===== */ 

/**
 * Listens for page load and retrieves languages (keys) from the projectData object  
 * and passes them to the View to create filter buttons. 
 */
const handlePageLoad = () => {
  getProjectData();
  // Loops throught the projectData object and returns an array of object keys: 
  let languageNames = Object.keys(projectData); 
  languageNames.forEach((languageName) => {
    createButton(languageName); 
  })
};

window.addEventListener("load", handlePageLoad); 


/**
 * Calls the View to initially hide all projects when user clicks a language filter button.
 * Filters the projectData object for projects that match the language selected 
 * by the user and passes these projects to the View for display.
 * @param e the event object is used to access the language label (as html innerText) of the clicked button.
 */
const handleLanguageSelection = (e) => {
  getProjectData();
  hideProjects(projectData);
  let languageButtonText = e.target.innerText;
  // Turns the projectData object into an array of arrays, each inner array containing a property and its value:
  const projectDataArray = Object.entries(projectData); 
  // Filters projects to find the ones with a data attribute value (property key) that 
  // includes the selected filter button's language label:
  let filteredProjects = projectDataArray.filter(([key]) => key.toLowerCase().trim().includes(languageButtonText.toLowerCase().trim())); 
  // Turns the filtered array of array into an object:
  const projectSelection = Object.fromEntries(filteredProjects); 
  highlightButton(languageButtonText);
  showSelectedProjects(projectSelection);
};




