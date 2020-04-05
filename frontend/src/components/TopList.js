import React, { Component } from "react";
import ListPost from "./ListPost";
//import TopPost from "./TopPost";

/**
 * Top list component.
 */
class TopList extends Component {
  constructor() {
    super();
    this.state = {
      searchName: "",
      searchParty: ""
    };
  }

  /**
   * limiting to 50 characters
   * @param {*} event
   */
  updateSearchName(event) {
    this.setState({ searchName: event.target.value.substring(0, 50) });
  }

  updateSearchParty(event) {
    this.setState({ searchParty: event.target.value.substring(0, 50) });
  }

  render() {
    let filteredPostsByName = this.props.listPosts.filter(listPost => {
      return (
        listPost.namn
          .toLowerCase()
          .indexOf(this.state.searchName.toLowerCase()) !== -1
      );
    });
    let filteredPostsByParty = filteredPostsByName.filter(listPost => {
      return (
        listPost.parti
          .toLowerCase()
          .indexOf(this.state.searchParty.toLowerCase()) !== -1
      );
    });
    /*     let top3 = [];
    let i = 0;
    for(i; i < 3; i++){
      if(filteredPostsByName[0]){
        top3[i] = filteredPostsByName.shift();
      }
    }

    let top = top3.map(topPost => {
    return <TopPost topPost={topPost} key={topPost.avg} />;
    }); */
    let list = filteredPostsByParty.map(listPost => {
      return <ListPost listPost={listPost} />;
    });

    return (
      <div>
        Filter by name:{" "}
        <input
          type="text"
          value={this.state.searchName}
          onChange={this.updateSearchName.bind(this)}
        />
        {" "}Filter by party:{" "}
        <input
          type="select"
          value={this.state.searchParty}
          onChange={this.updateSearchParty.bind(this)}
        />

        {/*         <ul className="topList">
          {top}
        </ul> */}
        <ul className="topList">{list}</ul>
      </div>
    );
  }
}

export default TopList;
