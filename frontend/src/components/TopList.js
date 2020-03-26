import React, { Component } from "react";
import ListPost from "./ListPost";
import TopPost from "./TopPost";

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
    let top3 = [];
    let i = 0;
    for(i; i < 3; i++){
      if(filteredPosts[0]){
        top3[i] = filteredPosts.shift();
      }
    }

    let top = top3.map(topPost => {
    return <TopPost topPost={topPost} key={topPost.avg} />;
    });
    let rest = filteredPosts.map(listPost => {
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
          {top}
        </ul>
        <ul className="topList">
          {rest}
        </ul>
        </div>
    );
  }
}

export default TopList;
