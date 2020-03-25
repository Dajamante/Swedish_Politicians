import React, { Component } from "react";
import "../stylesheets/TopLists.scss";
/**
 * List post component.
 */
class ListPost extends Component {

  render() {
    return (
        <li className="listPost">
            {this.props.listPost.namn} - {this.props.listPost.parti} - <br/> {this.props.listPost.avg}
        </li>
    );
  }
}
export default ListPost;
