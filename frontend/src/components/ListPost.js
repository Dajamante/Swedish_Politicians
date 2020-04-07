import React, { Component } from "react";
import "../stylesheets/TopLists.scss";

/**
 * List post component.
 */
class ListPost extends Component {
  render() {
    return (
      <li className="listPost">
        <div className="postGrid">
          <div className="rankCSS">
            {this.props.listPost.rank}
          </div>
          <div className="namnCSS">
            {this.props.listPost.namn}
          </div>
          <div className="resultatCSS">
            {this.props.listPost.resultat}
          </div>
          <div></div>
          <div className="partiCSS">{this.props.listPost.parti}</div>
        </div>
      </li>
    );
  }
}
export default ListPost;
