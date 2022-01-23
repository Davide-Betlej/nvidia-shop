import { Link } from "react-router-dom";
import background from "../Images/rtx-3090.jpg";
import "./Homepage.css";
const Homepage = () => {
  return (
    <div
      className="homepageWrapper"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="homepageSectionBoxWrapper">
        <div>
          <h1>Nvidia GeForce RTX 3090</h1>
        </div>
        <div>
          <p>Now avaliable for preorder</p>
        </div>
        <div>
          <Link to="/shop">
            <button>SHOP Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
