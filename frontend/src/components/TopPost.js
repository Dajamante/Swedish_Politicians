import React, { Component } from "react";
import "../stylesheets/TopLists.scss";
/**
 * List post component.
 */
class TopPost extends Component {

  render() {
    return (
        <li className="listPost">
            <div className="postGrid">
              <td>{this.props.topPost.namn}</td>
              <td>{this.props.topPost.parti}</td>
              <td>{this.props.topPost.avg}</td>
            </div>
        </li>
    );
  }
}
export default TopPost;
