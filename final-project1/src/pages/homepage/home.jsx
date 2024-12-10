import HomeProjects from "./home-projects";
import { motion } from "motion/react";
import "../css/home.css";
import { loadImages } from "../../utils/utils";
import { useRef } from "react";


export default function Home() {
  const projectRef = useRef(null);

  const handleScrollDown = () => {
    
    projectRef.current.scrollIntoView({behavior: "smooth",  block: "start", inline: "nearest"});
  }
  const projects = [
    {
      title: "Streamlining Form and Scoring Experiences",
      description:
        "How do we make it easier for faculty to fill out an annual form? How do we optimize efficiency for the committee who scores those forms?",
      imageFile: "images/homepage/fat.png",
      flower: "images/homepage/fat-flower.svg",
      alt: "dashboard of Faculty Activity Tracker project with red to orange gradient background",
      altFlower: "reddish-pink flower with yellow center",
      tags: ["product design", "ux design", "design systems"],
      link: "/fatProject"
    },
    {
      title: "Pairing Mindfulness with Task Organization",
      description:
        "How might we help college students practice mindfulness in a productive and stress-relieving manner?",
      imageFile: "images/homepage/mindful-cover.png",
      flower: "images/homepage/mindful-flower.svg",
      alt: "two phone mockups over blue background with a yellow circle on the top left with a orange star and a blue circle on bottom right with orange star at the top right of it with white curvy lines",
      altFlower: "blue flower with yellow center",
      tags: ["product design", "design systems", "ux research"],
      link: "/mindfulProject"
    },
    {
      title: "A Personalized Digital Space for Women",
      description:
        "How might we create a personalized space where women can express their emotions, keep track of their mood, and feel creatively fulfilled?",
      imageFile: "images/homepage/penella-cover.png",
      flower: "images/homepage/penella-flower.svg",
      alt: "computer, desktop, and mobile mockup of a website with light pink background",
      altFlower: "light pink flower with brown center",
      tags: ["product design", "design process", "ux research"],
      link: "/penellaProject"
    }
  ];
  return (
    <body className="background">
      <main class="home-main">
        <section>
          <div className="full-introduction">
            <h1 id="hi-im-anna">
              hi, I'm <span id="special-a">A</span>nna
            </h1>
            <h2 id="introduction">
              a <span id="product-designer">product designer </span> who creates
              for delight and utility
            </h2>
            <div className="columns">
              <div id="activity-element">
                <div className="flower-text">
                <motion.div
                    animate={{
                      y: [0,-25,0],
                      rotate: [0, 0, 360],
                    }}
                    transition={{
                      duration: 2,
                      ease: "easeInOut",
                      times: [0, 0.2, 0.5, 0.8, 1],
                      repeat: 2
                    }}
                  >
                    <img
                      src={loadImages("images/homepage/purpleflower.svg")}
                      width="26"
                      alt="purple flower with yellow center"
                      className="flower"
                    />
                  </motion.div>
                  <h3 className="italic-text">Currently</h3>
                </div>
                <h4 className="subtext">Studying HCI @ Carnegie Mellon</h4>
              </div>
              <div id="activity-element">
                <div className="flower-text">
                  <motion.div
                    animate={{
                      y: [0,-25,0],
                      rotate: [0, 0, 360],
                    }}
                    transition={{
                      duration: 2,
                      ease: "easeInOut",
                      times: [0, 0.2, 0.5, 0.8, 1],
                      repeat: 2
                    }}
                  >
                    <img
                      src={loadImages('images/homepage/blueflower.svg')}
                      width="26"
                      alt="blue flower with yellow center"
                      className="flower"
                    />
                  </motion.div>
                  <h3 className="italic-text">Constantly</h3>
                </div>
                <h4 className="subtext">Thinking how to improve human lives</h4>
              </div>
            </div>
            <div className="scroll-down" onClick={handleScrollDown}>
              <img 
                src={loadImages('images/homepage/down-arrow.svg')}
                width="60" 
                alt="down arrow"/>
            </div>
          </div>
          <div className="intro-background"></div>
        </section>
        <section className="featured-projects">
          <div className="all-projects" ref={projectRef}>
            {projects.map((project) => (
              <HomeProjects project={project} />
            ))}
          </div>
        </section>
      </main>
    </body>
  );
}
