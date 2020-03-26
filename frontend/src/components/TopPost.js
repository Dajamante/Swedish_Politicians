import React, { Component } from "react";
import "../stylesheets/TopLists.scss";
/**
 * List post component.
 */
class TopPost extends Component {

  render() {
    return (
        <li className="topPost">
            {this.props.topPost.namn} - {this.props.topPost.parti} - <br/> {this.props.topPost.avg}
        </li>
    );
  }
}
export default TopPost;
