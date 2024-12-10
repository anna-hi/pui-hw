import { loadImages } from "../../utils/utils";
import "../css/footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-sections">
        <div className="footer-left footer-text">
          <h3>annaji@andrew.cmu.edu  <span>
              <img
                src={loadImages("images/pinkflower.svg")}
                width="30"
                className="nav-image"
                alt="pink flower with yellow center"
              />
            </span></h3>
        </div> 
        <div className="footer-right footer-text">
          <h3>
            <a href="https://www.linkedin.com/in/anna-ji/" className="footer-link">Linkedin</a>{" "}/{" "} 
            <a href="https://drive.google.com/file/d/1yLEb9JJwInc0XuviAyUEJXIqHC9Z2nax/view?usp=sharing" className="footer-link">Resume</a>{" "}/{" "}
            <a href="https://github.com/anna-hi" className="footer-link">{" "}Github</a></h3>
        </div>
      </div>
    </footer>
  );
}
