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
              <td style={{fontSize:'38px', fontStyle:'bold'}}>1</td>
              <td style={{fontSize:'24px', fontStyle:'bold'}}>{this.props.listPost.namn}</td>
              <td style={{fontSize:'18px', textAlign:'right'}}>{this.props.listPost.avg.toFixed(2)}</td>
              <td></td>
              <td style={{fontSize:'12px'}}>{this.props.listPost.parti}</td>
            </div>
        </li>
    );
  }
}
export default ListPost;
