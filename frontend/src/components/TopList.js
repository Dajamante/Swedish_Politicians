import React, { Component } from "react";
import ListPost from "./ListPost";

/**
 * Top list component.
 */
class TopList extends React.Component {
  constructor() {
    super();
    this.state = {
      search: ""
    };
  }

  /**
   * limiting to 50 characters
   * @param {*} event
   */
  updateSearch(event){
    this.setState({search: event.target.value.substring(0,50)})
  }

  render() {
    let filteredPosts = this.props.listPosts.filter(
      (listPost) => {
        return listPost.namn.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );
    const ff = filteredPosts.map(listPost => {
      return <ListPost listPost={listPost} key={listPost.avg} />;
    });
    return (
      <div>
        Filter by name: <input
          type="text"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
        />
        <ul className="topThree">
          {ff[0]}
          {ff[1]}
          {ff[2]}
        </ul>
        <ul className="topList">
          {ff}
        </ul>
        </div>
    );
  }
}

export default TopList;
