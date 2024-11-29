import "./project-styles.css";
import { motion } from "motion/react";

export default function fatProject() {
  return (
    <div id="fat-project" className="project-container">
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
                  Streamlining Form and Scoring Experiences
                </h1>
                <h3 className="project-subtext">
                  product design · design systems
                </h3>
                <img
                  src="images/fat-cover.png"
                  width="100%"
                  alt="mockup of dashboard with two graphs with red bars and cards naming professors"
                />
              </motion.div>
              <div className="intro-background-color" />
            </div>
          </section>
          <section className="context content">
            <div className="overview">
              <h3 className="text-header">The Spark</h3>
              <p className="body-text">
                Every year, the College of Media Arts and Design (CAMD) faculty
                must fill out an exhausting 10-page paper form to track their
                completed activities to earn merit. The Merit Committee then
                sorts through 100s of forms to approve activities and manually
                assign scores.{" "}
              </p>
              <p className="body-text">
                This tedious process led our client, Mark Sivak, head of the
                Merit Committee, to task us to create a digital solution to
                streamline the process.
              </p>
            </div>
            <div className="role-overview">
              <div id="duration">
                <h3 className="text-header">Duration</h3>
                <p className="body-text">1 year | Jan - Dec 2023</p>
              </div>
              <div id="my-role">
                <h3 className="text-header">My Role</h3>
                <p className="body-text">UI/UX Designer</p>
              </div>
              <div id="team">
                <h3 className="text-header">Team</h3>
                <p className="body-text">
                  1 Project Lead, 4 Developers <br /> UX Designers - Anna Ji,
                  Cynthia Cao, Christine Cho, Helen Miao
                </p>
              </div>
            </div>
          </section>
        </section>
        <section class="section-header">
          <h2>The Problem with the Paper Form</h2>
        </section>
        <section class="proj-main content">
          <h3 className="text-header">3 Key Pain Points</h3>
        </section>
      </main>
    </div>
  );
}
