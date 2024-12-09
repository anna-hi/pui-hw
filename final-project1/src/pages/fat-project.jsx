import { loadImages } from "../utils/utils";
import "./css/project-styles.css";
import { motion } from "motion/react";
import ScrollToTopButton from "./scrollToTopButton";
import { useEffect, useRef } from 'react';


export default function FatProject() {
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
    <div id="fat-project" className="project-container-fat">
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
                  Streamlining Form and Scoring Experiences
                </h1>
                <h3 className="project-subtext">
                  product design · design systems
                </h3>
                <img
                  src={loadImages("/images/fat-project/fat-cover.png")}
                  width="100%"
                  alt="mockup of dashboard with two graphs with red bars and cards naming professors"
                />
              </motion.div>
              <div className="intro-background-color" ref={backgroundRef} />
            </div>
          </section>
          <section className="two-column content">
            <div className="overview">
              <h3 className="text-header-fat">The Spark</h3>
              <p className="body-text">
                Every year, the College of Media Arts and Design (CAMD) faculty
                must fill out an exhausting <strong>10-page paper form</strong> to track their
                completed activities to earn merit. The Merit Committee then
                sorts through <strong>100s of forms</strong> to approve activities and manually
                assign scores.{" "}
              </p>
              <p className="body-text">
                This tedious process led our client, Mark Sivak, head of the
                Merit Committee, to task us to create a digital solution to <strong>
                streamline the process.
                </strong>
              </p>
            </div>
            <div className="role-overview">
              <div id="duration">
                <h3 className="text-header-fat">Duration</h3>
                <p className="body-text">1 year | Jan - Dec 2023</p>
              </div>
              <div id="my-role">
                <h3 className="text-header-fat">My Role</h3>
                <p className="body-text">UI/UX Designer</p>
              </div>
              <div id="team">
                <h3 className="text-header-fat">Team</h3>
                <p className="body-text">
                  1 Project Lead, 4 Developers <br /> UX Designers - Anna Ji,
                  Cynthia Cao, Christine Cho, Helen Miao
                </p>
              </div>
            </div>
          </section>
        </section>
        <section>
          <h2 className="section-header-fat">The Problem with the Paper Form</h2>
          <div className="proj-main">
            <div className="content">
            <div className="paragraph-section">
              <h3 className="text-header-fat">3 Key Pain Points</h3>
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
