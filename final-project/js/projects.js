const projects = {
  "A Personalized Digital Space": {
    description:
      "How might we create a personalized space where women can express their emotions, keep track of their mood, and feel creatively fulfilled?",
    imageFile: "penella.svg",
    alt: "computer, desktop, and mobile mockup of a website with light pink background",
    tags: ["Product Design", "Design Process", "UX Research"],
  },
  "Practicing Mindfulness": {
    description:
      "How might we help college students practice mindfulness in a productive and stress-relieving manner?",
    imageFile: "mindful.svg",
    alt: "two phone mockups over blue background with a yellow circle on the top left with a orange star and a blue circle on bottom right with orange star at the top right of it with white curvy lines",
    tags: ["Product Design", "Design Systems", "UX Research"],
  },
  "Simplifying Form Experiences": {
    description:
      "How do we make it easier for faculty to fill out an annual form? How do we optimize efficiency for the committee who scores those forms?",
    imageFile: "fat.svg",
    alt: "dashboard of Faculty Actiity Tracker project with red to orange gradient background",
    tags: ["Product Design", "UX Design", "Design Systems"],
  },
};

class Project {
  constructor(projectTitle) {
    this.type = projectTitle;
  }
}

// createProject(new Project("Simplifying Form Experiences"));

for (const project in projects) {
  console.log("ugh");
  createProject(new Project(project));
}

function createProject(project) {
  const template = document.querySelector("#project-template");
  const clone = template.content.cloneNode(true);
  project.element = clone.querySelector(".project");

  const projectsElement = document.querySelector(".all-projects");
  projectsElement.prepend(project.element);

  console.log(project.element);
  updateProject(project);
}

function updateProject(project) {
  const projectTitleElement = project.element.querySelector(".title");
  const projectImageElement = project.element.querySelector('.project-cover-image');
  const projectTextElement = project.element.querySelector(".description");
  const projectTagElement = project.element.querySelector(".tags");

  projectTitleElement.innerText = project.type;
  projectImageElement.src = 'images/' + projects[project.type]["imageFile"];
  console.log(projectImageElement.src);
  projectImageElement.alt = projects[project.type]["alt"];
  projectTextElement.innerText = projects[project.type]["description"];

  const tagsList = projects[project.type]["tags"];
  console.log(tagsList);
  for (const tag of tagsList) {
    projectTagElement.innerHTML += `<p>${tag}</p>`;
    console.log(tag);
  }
}
