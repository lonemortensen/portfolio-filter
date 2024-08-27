# Portfolio Filter Gallery
In the Portfolio Filter Gallery, users click on filter buttons to choose which web projects to view. The buttons represent coding languages used in the projects. Built with vanilla JavaScript, HTML5, CSS3, and Flexbox.

## About
The Portfolio Filter Gallery showcases web development projects. The gallery is filterable so users can select the type of projects they want to see by clicking on buttons representing coding languages used in the projects. The filter will ensure that only projects built with the language selected by the user are displayed.

Users can filter the portfolio gallery by: 

- **All** - shows all projects
- **JavaScript** - incl. libraries and frameworks  
- **Python** - incl. libraries and frameworks
- **Ruby** - incl. libraries and frameworks


![Portfolio Filter Gallery](img/portfolio-filter-screenShot.png)


## Project Background
This was a personal project I designed and built. My main motivation for building this project was to practice:

- how to break down an idea into components, 
- understand what each component should do, and 
- how the data would need to flow between the components to create the desired functionality.

The result is the Portfolio Filter Gallery which is a filtering product that easily adapts to a changing portfolio and responds to user actions. It uses data attributes to store custom data on HTML elements and JavaScript to access and utilize the data to create filter buttons and update the user interface to reflect the user’s selection.  

Main features of the Portfolio Filter Gallery:

- The gallery uses HTML data attributes to store custom information associated with each portfolio project. The HTML data attribute assigned to each project indicates the main coding languages used for building the project.

- The script uses JavaScript to access the HTML data attribute values (languages) through the dataset property. The script collects and utilizes the information from the data attributes to create and display filter buttons based on the languages used in the portfolio projects at any given time.  

- The filter and its buttons automatically adapt to changes in the gallery’s HTML. For example, if new (or existing) projects introduce a new language, a new corresponding button is automatically created and displayed by the script.

- Along with the data attribute values (languages), the script also stores a reference to every project that uses each of the languages. Each language and its associated projects are stored as a key-value pair in a ‘project data’ object. 

- When the user selects and clicks on a language filter button, the script retrieves data from the innerText property via the event object and filters through the project data object to find and display portfolio projects that match the user’s selection and update the user interface accordingly.  

- The Portfolio Filter Gallery’s script applies the Model-View-Controller pattern to organize the script and to separate and execute tasks. 

## Built With 
- JavaScript
- HTML5 
- CSS3 
- Flexbox

## Launch
[See the live version of the Portfolio Filter Gallery here.](https://lonemortensen.github.io/portfolio-filter/)

