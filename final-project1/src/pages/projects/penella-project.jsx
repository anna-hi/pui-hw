import { loadImages } from "../../utils/utils";
import "../css/project-styles.css";
import ProjectHeader from "./components/project-header";
import ImageViewer from "./components/image-viewer";

// main page for penella project
export default function PenellaProject() {
  const penella = {
    title: "A Personalizezd Digital Space for Women",
    subtext: "design process · ux research",
    coverImage: "/images/penella-project/penella-cover.png",
    coverImageAlt: "mockup of Penella dashboard on desktop, laptop and mobile",
    coverImageWidth: "88%",
  };
  return (
    <div id="penella-project" className="project-container-penella">
      <main>
        <section class="proj-main">
          <ProjectHeader projectHead={penella} />
          <section className="two-column content">
            <div className="overview">
              <h3 className="text-header-penella">Bibbity Boppity Boo!</h3>
              <p className="body-text">
                Penella or Pen-ella is a classroom project–built from my own
                imagination. The name is inspired by Cinderella, otherwise known
                as Cinder-ella. Penella is a journaling website unlike any
                other, given its customizable nature and additional features
                such as a calendar, moodboard, gifs, and stickers.
              </p>
            </div>
            <div className="role-overview">
              <div className="duration">
                <h3 className="text-header-penella">Duration</h3>
                <p className="body-text">4 months | Sept - Dec 2022</p>
              </div>
              <div className="my-role">
                <h3 className="text-header-penella">My Role</h3>
                <p className="body-text">
                  UI/UX Designer <br /> UX Researcher
                </p>
              </div>
            </div>
          </section>
        </section>
        <section>
          <div className="proj-main">
            <div className="content">
              <div className="paragraph-section">
                <h3 className="text-header-penella">
                  The Notes App Diary Dilemma
                </h3>
                <p className="body-text one-column">
                  When I often feel overwhelmed or irritated, I feel the urge to
                  write down all my thoughts. This usually manifests into a
                  quick journaling entry in my Notes app due to lack of time.
                  However, there are 3 main issues with this method:
                </p>
                <ol className="indented-listed">
                  <li className="text-med-header">
                    Unable to find the journal entries again
                  </li>
                  <li className="text-med-header">
                    No structure to organize my thoughts
                  </li>
                  <li className="text-med-header">Not fun to use</li>
                </ol>
              </div>
            </div>
            <div className="image-container">
              <ImageViewer
                src={loadImages("images/penella-project/penella-screens.png")}
                alt={"three desktop mockups of Penella project"}
                className="center-image"
                width="100%"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
