import './menu-item.styles.scss';
import {withRouter} from "react-router-dom";


const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => (
  <div
    style={{
      backgroundImage: `url(${imageUrl})`,
    }}
    className={`${size} menu-item background-image`}
    onClick={() => history.push(`${linkUrl}`)}
  >
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

// HOC
 export default withRouter(MenuItem);