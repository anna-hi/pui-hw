import { loadImages } from "../utils/utils";
import "./css/project-styles.css";
import { motion } from "motion/react";
import ScrollToTopButton from "./scrollToTopButton";

export default function mindfulProject() {
  return (
    <div id="mindful-project" className="project-container-mindful">
      <main>
        <section class="proj-main">
          <section className="proj-introduction">
            <div className="proj-introduction-content">
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
              <div className="intro-background-color" />
            </div>
          </section>
          <section className="two-column content">
            <div className="overview">
              <h3 className="text-header-mindful">The Spark</h3>
              <p className="body-text">
                For my senior capstone project, I created Mindful, a mobile app
                where people can track their tasks, ideas, and find curated
                music/sounds to study and take breaks. This app will help people
                to finish work more efficiently to reduce stress and encourage
                breaks.{" "}
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
        <section>
          <h2 className="section-header">The Problem with the Paper Form</h2>
          <div className="proj-main">
            <div className="content">
              <h3 className="text-header-mindful">3 Key Pain Points</h3>
              <div class="three-column">
                <div class="column">
                  <h4 className="text-med-header">Tedious to Organize</h4>
                  <p className="body-text">
                    Faculty tend to fill out the form all at once and must
                    manually separate by activity type.
                  </p>
                </div>
                <div class="column">
                  <h4 className="text-med-header">Unable to Edit</h4>
                  <p className="body-text">
                    Faculty can't edit activities after they submit. The Merit
                    Committee members have to manually approve and reject
                    activities.
                  </p>
                </div>
                <div class="column">
                  <h4 className="text-med-header">Repetitive Form Boxes</h4>
                  <p className="body-text">
                    The same semester/date must be repeated over and over for
                    each activity.
                  </p>
                </div>
              </div>
            </div>
            <img
              src={loadImages("images/fat-project/paper-form.png")}
              width="100%"
              alt="orginial paper form with three pages and multiple form boxes"
            />
          </div>
        </section>
        <ScrollToTopButton />
      </main>
    </div>
  );
}
