import { loadImages } from "../utils/utils";
import "./css/project-styles.css";
import ScrollToTopButton from "./scrollToTopButton";
import ProjectHeader from "./project-header";

export default function MindfulProject() {
  const mindful = {
    title: "Pairing Mindfulness with Task Organization",
    subtext: "design systems · ux research",
    coverImage: "/images/mindful-project/mindful-cover.png",
    coverImageAlt:
      "mockup of dashboard with two graphs with red bars and cards naming professors",
    coverImageWidth: "89%",
  };
  return (
    <div id="mindful-project" className="project-container-mindful">
      <main>
        <section class="proj-main">
          <ProjectHeader projectHead={mindful} />
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
                  <li className="text-med-header">
                    Busy people are scared of wasting time
                  </li>
                  <li className="text-med-header">
                    People would rather focus on work than meditate
                  </li>
                  <li className="text-med-header">
                    Meditaiton apps are not often used among students
                  </li>
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
