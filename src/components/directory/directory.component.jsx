import React from "react";

import MenuItem from "../menu-items/menu-item.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySelection } from "../../redux/directory/directory.selectors";

import "./directory.styles.scss";

const Directory = ({ sections, firstPosition }) => {
  return (
    <div className="directory-menu">
      {firstPosition ? (
        <div className="directory-block-four">
          <div className="directory-block-five">
            <MenuItem {...sections[5]} />
          </div>
          <div className="directory-block-six">
            <MenuItem {...sections[4]} />
          </div>
        </div>
      ) : (
        <>
          <div className="directory-block-one">
            <MenuItem {...sections[0]} />
          </div>
          <div className="directory-block-two">
            <div className="directory-block-three">
              <MenuItem {...sections[2]} />
            </div>
            <div className="directory-block-four">
              <div className="directory-block-five">
                <MenuItem {...sections[3]} />
              </div>
              <div className="directory-block-six">
                <MenuItem {...sections[4]} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySelection,
});

export default connect(mapStateToProps)(Directory);
