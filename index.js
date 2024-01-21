//Including packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/makeMarkdown.js");


//Creating an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Name of this Project:",
  },
  {
    type: "input",
    name: "description",
    message: "Outline in further detail the intended use:",
  },
  {
    type: "input",
    name: "screenshot",
    message: "If including a screenshot, please provide the relative path here."
  },
  {
    type: "input",
    name: "link",
    message: "Write the full URL at which one can access the deployed application."
  },
  {
    type: "checkbox",
    name: "license",
    message: "Please select a license",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
  },
  {
    type: "input",
    name: "require",
    message: "Which (if any) dependencies are required to operate?",
  },
  {
    type: "input",
    name: "features",
    message: "Describe any features or functions that make this project unique:",
  },
  {
    type: "input",
    name: "usage",
    message:
      "Please list languages or technologies used in the creation of this project.",
  },
  {
    type: "input",
    name: "creator",
    message: "GitHub alias here:",
  },
  {
    type: "input",
    name: "email",
    message: "An associated email address for contacts or questions.",
  },
  {
    type: "input",
    name: "contributors",
    message: "List any contributors-- please use their GitHub alias",
    default: "",
  },
];

// Writing README.md File
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Initializing app
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("Creating Professional README.md File...");
    writeToFile("./dist/README.md", generateMarkdown({ ...responses }));
  });
}
init();
