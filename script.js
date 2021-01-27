// Clear background;
function clearBackground() {
  document.querySelector(".background").innerHTML = ``;
}

// Initial About ME
// Create Background div
let background = document.createElement("div");

const footer = document.querySelector(".footer");

const body = document.querySelector("body");
// add it to the DOM
document.body.insertBefore(background, footer);

// add background classes
background.classList.add("background");

// remove footer classes
footer.classList.remove("reduce-margin");

let backgroundRemove = document.querySelector(".background");

// Clear background
clearBackground(backgroundRemove);
function clearBackground(background) {
  background.remove();
}

body.insertBefore(background, footer);

if (background.innerHTML === "") {
  background.innerHTML = `
         <div class="about-me">
<div class="background-container">
  <div class="background-left">
    <div class="profile-container">
    <div class="profile-image">
    <img src="img/Profile.jpg" alt="profile image" />

    <p class="myname"><span>Temitope</span><span>Ogunleye</span></p>

    <div class="horizontal-line"></div>

    <p>Web Developer</p>

    <div class="profile-image-btn">
      <a href="#resume" class="btn btn-blue resume"
        >RESUME</a
      >
      <a
        href="#projects"
        class="btn btn-white projects"
        >PROJECTS</a
      >
    </div>
        <div class="social-media">
                  <a
              href="https://github.com/topeogunleye
                "
              class="fa fa-github"
              target="_blank"
            ></a>
            <a
              href="https://web.facebook.com/topeogunleye21
            "
              class="fa fa-facebook"
              target="_blank"
            ></a>
            <a
              href="https://twitter.com/temi_web
            "
              class="fa fa-twitter"
              target="_blank"
            ></a>
            <a
              href="https://www.linkedin.com/in/ogunleye
            "
              class="fa fa-linkedin"
              target="_blank"
            ></a>
            <a
              href="https://www.instagram.com/topeogunleye1/
            "
              class="fa fa-instagram"
              target="_blank"
            ></a>
                </div>
      </div>
    </div>
  </div>
  <div class="background-right">
    <div class="bg-right-container">
      <p class="header">Hello</p>
      <div class="bg-right-btn">
      <a href="#resume" class="btn btn-blue resume">RESUME</a>
      <a href="#projects" class="btn btn-white projects">PROJECTS</a>
      </div>
      <div class="dev-description">
        <p class="first-p">
          I'm a Frontend developer with 2+ years experience in building
          interactive web applications for web and mobile platforms. Track
          record of maintaining a high bar for quality of code and working
          aggressively to eliminate unnecessary duplication and unused
          code.
        </p>

        <p class="second-p">
          I've also Lead part of a team that taught 750 secondary school
          students how to code and practice Online Safety.
        </p>
      </div>
    </div>
  </div>
</div>
</div>
    `;

  // add two css classes
  background.classList.add("background", "faded-out");

  // and remove 'faded-out' in order to fade-in our element
  requestAnimationFrame(() => {
    background.classList.remove("faded-out");
  });
}

// About Me
// Event Listener for About Me
const abouts = document.querySelectorAll("#about");
abouts.forEach((about) => {
  about.addEventListener("click", () => {
    // Create Background div
    let background = document.createElement("div");

    const footer = document.querySelector(".footer");

    const body = document.querySelector("body");
    // add it to the DOM
    document.body.insertBefore(background, footer);

    // add background classes
    background.classList.add("background");
    // remove footer classes
    footer.classList.remove("reduce-margin");

    let backgroundRemove = document.querySelector(".background");

    // Clear background
    clearBackground(backgroundRemove);
    function clearBackground(background) {
      background.remove();
    }

    body.insertBefore(background, footer);

    if (background.innerHTML === "") {
      background.innerHTML = `
                 <div class="about-me">
        <div class="background-container">
          <div class="background-left">
            <div class="profile-container">
            <div class="profile-image">
            <img src="img/Profile.jpg" alt="profile image" />
  
            <p class="myname"><span>Temitope</span><span>Ogunleye</span></p>
  
            <div class="horizontal-line"></div>
  
            <p>Web Developer</p>
  
            <div class="profile-image-btn">
              <a href="#resume" class="btn btn-blue resume" id="resume"
                >RESUME</a
              >
              <a
                href="#projects"
                class="btn btn-white projects"
                id="projects"
                >PROJECTS</a
              >
            </div>
                 <div class="social-media">
                  <a
              href="https://github.com/topeogunleye
                "
              class="fa fa-github"
              target="_blank"
            ></a>
            <a
              href="https://web.facebook.com/topeogunleye21
            "
              class="fa fa-facebook"
              target="_blank"
            ></a>
            <a
              href="https://twitter.com/temi_web
            "
              class="fa fa-twitter"
              target="_blank"
            ></a>
            <a
              href="https://www.linkedin.com/in/ogunleye
            "
              class="fa fa-linkedin"
              target="_blank"
            ></a>
            <a
              href="https://www.instagram.com/topeogunleye1/
            "
              class="fa fa-instagram"
              target="_blank"
            ></a>
                </div>
              </div>
            </div>
          </div>
          <div class="background-right">
            <div class="bg-right-container">
              <p class="header">Hello</p>
              <div class="bg-right-btn">
              <a href="#resume" class="btn btn-blue resume">RESUME</a>
              <a href="#projects" class="btn btn-white projects">PROJECTS</a>
             </div>
              <div class="dev-description">
                <p class="first-p">
                  I'm a Frontend developer with 2+ years experience in building
                  interactive web applications for web and mobile platforms. Track
                  record of maintaining a high bar for quality of code and working
                  aggressively to eliminate unnecessary duplication and unused
                  code.
                </p>
    
                <p class="second-p">
                  I've also Lead part of a team that taught 750 secondary school
                  students how to code and practice Online Safety.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
            `;

      // add two css classes
      background.classList.add("background", "faded-out");

      // and remove 'faded-out' in order to fade-in our element
      requestAnimationFrame(() => {
        background.classList.remove("faded-out");
      });
    }
  });
});

// Projects
// Event listeners for Projects
const projects = document.querySelectorAll(".projects");

projects.forEach((project) => {
  project.addEventListener("click", () => {
    // Create Background div
    let background = document.createElement("div");

    const footer = document.querySelector(".footer");

    const body = document.querySelector("body");
    // add it to the DOM
    document.body.insertBefore(background, footer);

    // add background classes
    background.classList.add("background");

    // add/remove footer classes
    footer.classList.add("reduce-margin");
    footer.classList.remove("reduce-width");
    footer.classList.remove("reduce-width-resume");

    let backgroundRemove = document.querySelector(".background");

    // Clear background
    clearBackground(backgroundRemove);
    function clearBackground(background) {
      background.remove();
    }

    body.insertBefore(background, footer);

    if (background.innerHTML === "") {
      background.innerHTML = `
               <h2 class="projects"><div class="tinybox-resume"></div>Projects</h2>

    <p>Check out some of my projects down below!</p>
  <div id="projects">

    <div class="project-container box">
      <div class="project-text exp-left one">
        <div class="project-headline">
          <div class="bar"></div>
          <div class="heading-container">
            <h3>Intellectual App</h3>
            <h3>Challenge</h3>
          </div>
          <div class="button">
          <a href="https://intellectualapp.netlify.app/#" class="btn btn-blue" target="_blank">Check It Out!</a>
        </div>
        </div>

        <h3 class="project-description">Description</h3>
        <p>
          A web page based on a png I was asked to recreate for a job
          application. It is a Single Page Application built with pure
          HTML/CSS and Vanilla JavaScript.
        </p>

        <h3 class="project-description">Technologies</h3>
        <p>HTML, CSS, and JavaScript</p>
      </div>
      <div class="project-picture exp-right">
        <img src="./img/project1.png" alt="project one" class="p-image"/>
      </div>
    </div>
  </div>

  <div id="projects">

    <div class="project-container box">
      <div class="project-text exp-left two">
        <div class="project-headline">
          <div class="bar"></div>
          <div class="heading-container">
            <h3>EdgeLedger </h3>
            <h3>Website</h3>
          </div>
          <div class="button">
          <a href="https://intellectualapp.netlify.app/#" class="btn btn-blue" target="_blank">Check It Out!</a>
        </div>
        </div>

        <h3 class="project-description">Description</h3>
        <p>
          An edgeledger website I built following Brad Traversy's Modern HTML and CSS Course. This projects uses HTML, flexbox , and the latest technologies to achieve a responsive website.
        </p>

        <h3 class="project-description">Technologies</h3>
        <p>HTML, CSS, and JavaScript</p>
      </div>
      <div class="project-picture exp-right edgeledger">
        <img src="./img/project2.png" alt="project one" class="p-image"/>
      </div>
    </div>
  </div>
          `;

      // add two css classes
      background.classList.add("background", "faded-out");

      // and remove 'faded-out' in order to fade-in our element
      requestAnimationFrame(() => {
        background.classList.remove("faded-out");
      });
    }
  });
});

// Resume
// Event listener for Resume
const resumes = document.querySelectorAll(".resume");

resumes.forEach((resume) => {
  resume.addEventListener("click", () => {
    console.log(resume)
    // Create Background div
    let background = document.createElement("div");

    const footer = document.querySelector(".footer");

    const body = document.querySelector("body");
    // add it to the DOM
    document.body.insertBefore(background, footer);

    // add background classes
    background.classList.add("background");

    // add/remove footer classes
    footer.classList.add("reduce-margin");
    footer.classList.add("reduce-width-resume");
    footer.classList.remove("reduce-width");

    let backgroundRemove = document.querySelector(".background");

    // Clear background
    clearBackground(backgroundRemove);
    function clearBackground(background) {
      background.remove();
    }

    body.insertBefore(background, footer);

    if (background.innerHTML === "") {
      background.innerHTML = `
<h1><div class="tinybox-resume"></div>Resume</h1>
    <div class="header-container">
      <h2>Experience</h2>
      <a href="./cv/mycv.pdf" class="btn btn-blue download" target="_blank">DOWNLOAD CV</a>
    </div>

    <!-- Experience Section -->
    <div class="experience box resume">
      <div class="exp-left resume">
        <p class="date">Oct 2019 – Dec 2019</p>

        <h3>LEARNING LEAD</h3>
        <p class="company">Junior Achievement Nigeria</p>

        <p>Abuja, Nigeria</p>
      </div>

      <div class="exp-right">
        <p>
          <span class="first-paragraph"
            >My role is to teach 95 secondary school students how to code
            using Google CS First and Scratch Programming Language.</span
          >
          <span
            >I was also in charge of handling student's materials, projects,
            and monitoring the student's progress.</span
          >
        </p>

        <p></p>
      </div>
    </div>

    <div class="experience box resume">
      <div class="exp-left resume">
        <p class="date">Oct 2019 – Dec 2019</p>

        <h3>LEARNING LEAD</h3>
        <p class="company">TechQuest STEM Academy</p>

        <p>Lagos,Nigeria</p>
      </div>

      <div class="exp-right">
        <p>
          <span class="first-paragraph"
            >My role is to Lead part of a team that taught 750 secondary
            school students how to code and practice Online Safety Using
            Google CS First Curriculum and Resources.</span
          >
          <span
            >I was also in charge of handling student's projects and
            monitoring student's progress.</span
          >
        </p>

        <p></p>
      </div>
    </div>

    <div class="header-container">
      <h2 class="edu-head">Education</h2>
    </div>
    <div class="education box resume">
      <div class="exp-left resume">
        <p class="date first-edu">2014 - 2017</p>

        <h3>UNIVERSITY OF LAGOS</h3>
        <p class="company">Bachelor of Science, Economics</p>

        <p>Lagos,Nigeria</p>
      </div>

      <div class="exp-right">
        <p>
          I learnt about microeconomics, macroeconmics, including the various
          theories of econmics from keynesian to maxian, e.t.c. I choose to go
          into web development because I found economics to be boring
        </p>

        <p></p>
      </div>
    </div>

    <div class="education box resume">
      <div class="exp-left resume">
        <p class="date">OCT 2020 - DEC 2020</p>

        <h3>UDEMY</h3>
        <p class="company">Advanced CSS ans Sass</p>

        <p>Online</p>
      </div>

      <div class="exp-right">
        <p>
          I learned advanced CSS concepts e.g Flexbox,CSS grid, CSS
          Animations. I learned what goes on in the background like how rems
          are converted to pixels e.t.c.
        </p>

        <p></p>
      </div>
    </div>

    <!-- Skills/ Languagues Section -->

    <div class="industry-skills box resume">
      <div class="top box resume">
      <h2>Industry Expertise</h2>

      <div class="industry-expertise">
        <prog-list class="industryexpertise">
          <ul>
            <li>
              <a href="#"
                ><div class="tinybox"></div>
                Responsive Web Design</a
              >
            </li>
            <li>
              <a href="#"
                ><div class="tinybox"></div>
                Single Page App Development</a
              >
            </li>
            <li>
              <a href="#"
                ><div class="tinybox"></div>
                Version Control</a
              >
            </li>
            <li>
              <a href="#"
                ><div class="tinybox"></div>
                Accessibility</a
              >
            </li>
            <li>
              <a href="#"
                ><div class="tinybox"></div>
                User Interface Design</a
              >
            </li>
            <li>
              <a href="#"
                ><div class="tinybox"></div>
                Web Templating</a
              >
            </li>
            <li>
            <a href="#"
              ><div class="tinybox"></div>
              HTML/CSS</a
            >
          </li>
          <li>
          <a href="#"
            ><div class="tinybox"></div>
            JavaScript</a
          >
        </li>
        <li>
        <a href="#"
          ><div class="tinybox"></div>
          SASS</a
        >
      </li>
          </ul>

        </prog-list>
      </div>
    
      </div>
    </div>
    </div>
          `;

      // add two css classes
      background.classList.add("background", "faded-out");

      // and remove 'faded-out' in order to fade-in our element
      requestAnimationFrame(() => {
        background.classList.remove("faded-out");
      });
    }
  });
});

// Contacts
// Event Listeners for contacts
const contacts = document.querySelectorAll("#contact");
contacts.forEach((contact) => {
  contact.addEventListener("click", () => {
    // Create Background div
    let background = document.createElement("div");

    const footer = document.querySelector(".footer");

    const body = document.querySelector("body");
    // add it to the DOM
    document.body.insertBefore(background, footer);

    // add background classes
    background.classList.add("background");

    // add/remove footer classes
    footer.classList.add("reduce-margin");
    footer.classList.remove("reduce-width");
    footer.classList.remove("reduce-width-resume");

    let backgroundRemove = document.querySelector(".background");

    // Clear background
    clearBackground(backgroundRemove);
    function clearBackground(background) {
      background.remove();
    }

    body.insertBefore(background, footer);

    if (background.innerHTML === "") {
      background.innerHTML = `
                                 <h2 class="contact">
      <div class="tinybox-resume"></div>
      Contact Me
    </h2>
  
    <!-- Contact Section -->
      <form class="form-style-9">
        <ul>
        <li>
            <input type="text" name="field1" class="field-style field-split align-left" placeholder="Name" />
            <input type="email" name="field2" class="field-style field-split align-right" placeholder="Email" />
        
        </li>
        <li>
            <input type="text" name="field3" class="field-style field-split align-left" placeholder="Phone" />
            <input type="url" name="field4" class="field-style field-split align-right" placeholder="Website" />
        </li>
        <li>
        <input type="text" name="field3" class="field-style field-full align-none" placeholder="Subject" />
        </li>
        <li>
        <textarea name="field5" class="field-style" placeholder="Message"></textarea>
        </li>
        <li>
        <!-- <input class="btn btn-blue download"type="submit" value="Send Message" /> -->
        <a href="" class="btn btn-blue download">Send Message</a>
        </li>
        </ul>
        </form>
            `;

      // add two css classes
      background.classList.add("background", "faded-out");

      // and remove 'faded-out' in order to fade-in our element
      requestAnimationFrame(() => {
        background.classList.remove("faded-out");
      });
    }
  });
});

var navbar = document.querySelector(".navbar");
var ham = document.querySelector(".ham");

// toggles hamburger menu in and out when clicking on the hamburger
function toggleHamburger() {
  navbar.classList.toggle("showNav");
  ham.classList.toggle("showClose");
}

ham.addEventListener("click", toggleHamburger);

// toggle when clicking on links

// METHOD 1
var menuLinks = document.querySelectorAll(".menuLink");
menuLinks.forEach(function (menuLink) {
  menuLink.addEventListener("click", toggleHamburger);
});

// METHOD 2

// used event delegation to not have to add a listener to every link
// learnt event delegation from @coderarchive
// https://dev.to/coderarchive/event-delegation-in-js-1aff
// comment METHOD 1 & uncomment the following to try METHOD 2

/*

function checkToggle(e){
  var itemClicked = e.target
  if (itemClicked.classList.contains("menuLink")) {
    toggleHamburger()
  }
}

navbar.addEventListener("click", checkToggle)

*/
