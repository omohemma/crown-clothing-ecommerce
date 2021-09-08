import { Component } from 'react';
import  MenuItem  from '../menu-item/menu-item.component';
import './directory.styles.scss';
import SECTION_DATA from "./directory.data.js";

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: SECTION_DATA
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherProps}) => (
          <MenuItem key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default Directory;