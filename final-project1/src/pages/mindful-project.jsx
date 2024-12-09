import { loadImages } from "../utils/utils";
import "./css/project-styles.css";
import { motion } from "motion/react";
import ScrollToTopButton from "./scrollToTopButton";
import { useEffect, useRef} from "react";

export default function MindfulProject() {
  const contentRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      // Create a ResizeObserver to track changes
      // https://react.dev/reference/react/useRef
      const resizeObserver = new ResizeObserver((entries) => {
        entries.forEach((entry) => {
          if (backgroundRef.current) {
            backgroundRef.current.style.height = `${entry.contentRect.height}px`; // Update height on changes
          }
        });
      });
      resizeObserver.observe(contentRef.current); // Start observing the element

      return () => {
        resizeObserver.disconnect(); // Cleanup on component unmount
      };
    }
  }, []);
  return (
    <div id="mindful-project" className="project-container-mindful">
      <main>
        <section class="proj-main">
          <section className="proj-introduction">
            <div className="proj-introduction-content" ref={contentRef}>
              <motion.div
                className="box"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <h1 className="project-title">
                  Pairing Mindfulness with Task Organization
                </h1>
                <h3 className="project-subtext">
                  design systems · ux research
                </h3>
                <img
                  src={loadImages("/images/mindful-project/mindful-cover.png")}
                  width="89%"
                  alt="mockup of dashboard with two graphs with red bars and cards naming professors"
                />
              </motion.div>
              <div className="intro-background-color" ref={backgroundRef} />
            </div>
          </section>
          <section className="two-column content">
            <div className="overview">
              <h3 className="text-header-mindful">Helping My Friends</h3>
              <p className="body-text">
                During my senior year, many of my friends were overloaded with
                coursework and incredibly stressed out. For my senior capstone
                project, I created Mindful, a mobile app where students can
                track their tasks, ideas, and find curated music/sounds to study{" "}
                <strong>
                  <i>and take breaks</i>
                </strong>
                . This app will help students finish work more efficiently to
                reduce stress and encourage breaks.{" "}
              </p>
              <p className="body-text">
                What makes this mindfulness app different from others, is the
                combination of task organization with mindfulness.
              </p>
            </div>
            <div className="role-overview">
              <div id="duration">
                <h3 className="text-header-mindful">Duration</h3>
                <p className="body-text">4 months | Jan - Apr 2024</p>
              </div>
              <div id="my-role">
                <h3 className="text-header-mindful">My Role</h3>
                <p className="body-text">
                  UI/UX Designer <br /> UX Researcher
                </p>
              </div>
              <div id="team">
                <h3 className="text-header-mindful">Advisor</h3>
                <p className="body-text">Evie Hu / Lead UX Designer @ Google</p>
              </div>
            </div>
          </section>
        </section>
        <div className="section-header-mindful">
          Many students feel overwhelmed by the number of tasks they must
          complete.
        </div>
        <section>
          <div className="proj-main">
            <div className="content">
            <div className="paragraph-section">
              <h3 className="text-header-mindful">
                5 Semi-Structured Interviews
              </h3>
              <p className="body-text one-column">
                The sheer amount of work that must be finished can paralyze a
                person, negatively affecting their productivity and mental
                health. This app will allow people to manage their work
                productively and take well-needed breaks.
              </p>
              <ol className="indented-listed">
                <li className="text-med-header">Busy people are scared of wasting time</li>
                <li className="text-med-header">People would rather focus on work than meditate</li>
                <li className="text-med-header">Meditaiton apps are not often used among students</li>
              </ol>
              </div>
            </div>
            <img
              src={loadImages("images/mindful-project/mindful-images.png")}
              width="80%"
              alt="three mobile phone mockups of Mindful project"
              className="center-image"
            />
          </div>
        </section>
        <ScrollToTopButton />
      </main>
    </div>
  );
}
