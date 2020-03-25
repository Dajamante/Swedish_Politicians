import React, { Component } from "react";

/**
 * List post component.
 */
class ListPost extends Component {

  render() {
    return (
        <li>
            {this.props.listPost.namn} - {this.props.listPost.parti} - {this.props.listPost.avg}
        </li>
    );
  }
}
export default ListPost;
