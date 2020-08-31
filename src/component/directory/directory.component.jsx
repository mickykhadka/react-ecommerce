import React, { Component } from "react";
import MenuItem from "../menu-items/menu-item.component";

import "./directory.styles.scss";

export default class Directory extends Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          id: 1,
          title: "suitcase",
          linkUrl: "suitcase",
          imageUrl:
            "https://images.unsplash.com/photo-1597946650068-3be3408e6299?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80",
        },
        {
          id: 2,
          title: "Watch",
          linkUrl: "watch",
          imageUrl:
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        },
        {
          id: 3,
          title: "headphones",
          linkUrl: "headphones",
          imageUrl:
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        },
        {
          id: 4,
          title: "Mens Clothing",
          linkUrl: "clothing",
          size: "larger",
          imageUrl:
            "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        },
        {
          id: 5,
          title: "Womens Wear",
          size: "larger",
          linkUrl: "womenclothing",
          imageUrl:
            "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherProps }) => (
          <MenuItem key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}
