import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShip, faTruck, faPlane } from "@fortawesome/free-solid-svg-icons";
import "./solutionsSite.css";

const SolutionsSite = () => {
  return (
    <div className="solutions-site">
      <h1>Our Solutions</h1>
      <p>
        We provide custom clearance services for import/export of cargo from all
        around the world.
      </p>
      <div className="solutions-details">
        <div>
          <h2>Sea Freight</h2>
          <p>
            We offer comprehensive sea freight solutions with a focus on
            cost-effectiveness and efficient handling.
          </p>
          <FontAwesomeIcon id="faShip" icon={faShip} size="3x" />
        </div>
        <div>
          <h2>Land Freight</h2>
          <p>
            We provide reliable and efficient land freight services to ensure
            your goods reach their destination on time.
          </p>
          <FontAwesomeIcon id="faPlane" icon={faPlane} size="3x" />
        </div>
        <div>
          <h2>Air Freight</h2>
          <p>
            We provide fast and secure air freight services to meet your urgent
            shipping needs.
          </p>
          <FontAwesomeIcon id="faTruck" icon={faTruck} size="3x" />
        </div>
      </div>
    </div>
  );
};

export default SolutionsSite;
