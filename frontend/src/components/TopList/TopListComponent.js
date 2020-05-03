import React, { Component } from "react";
import ListPost from "./ListPost";

/**
 * Top list component.
 */
class TopList extends Component {
    constructor() {
        super();
        this.state = {
        searchName: "",
        searchParty: "",
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
    let filteredPostsByName = this.props.listPosts.filter((listPost) => {
        return (
            listPost.namn
            .toLowerCase()
            .indexOf(this.state.searchName.toLowerCase()) !== -1
        );
    });
    let filteredPostsByParty = filteredPostsByName.filter((listPost) => {
        return (
            listPost.parti
            .toLowerCase()
            .indexOf(this.state.searchParty.toLowerCase()) !== -1
        );
    });

    let list = filteredPostsByParty.map((listPost) => {
        return <ListPost listPost={listPost} />;
    });

    return (
        <>
            <div className="topListFilterButtonName">
                <input
                    className="topListFilterTextField"
                    type="text"
                    value={this.state.searchName}
                    onChange={this.updateSearchName.bind(this)}
                />
            </div>
            <div className="topListFilterButtonParty">
                <input
                    className="topListFilterTextField"
                    type="text"
                    value={this.state.searchParty}
                    onChange={this.updateSearchParty.bind(this)}
                />
            </div>
            <dl className="topList">
                <div className="topListTitles">
                    <div className="topListTitlePlacering">Placering</div>
                    <div className="topListTitleNamnParti">Ledamot, parti</div>
                    <div className="topListTitleResultat">Resultat</div>
                </div>
                {list}
            </dl>
        </>
    );
  }
}
export default TopList;
