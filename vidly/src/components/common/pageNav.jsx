import React, { Component } from "react";
class PageNav extends Component {
  state = {
    pages: [
      { index: 0, selected: true },
      { index: 1, selected: false },
      { index: 2, selected: false }
    ]
  };

  getSelected = selected => {
    let classes = "page-item";
    if (selected) classes += " active";
    return classes;
  };

  handleClick = page => {
    const pages = [...this.state.pages];
    const index = pages.indexOf(page);
    pages[index] = { ...pages[index] };
    console.log("clicked", pages);
    pages.forEach(page => {
      if (page.index === index) {
        page.selected = true;
      } else {
        page.selected = false;
      }
    });
    this.setState({ pages });
  };

  render() {
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {this.state.pages.map(page => (
            <li className={this.getSelected(page.selected)} key={page.index}>
              <a className="page-link" onClick={() => this.handleClick(page)}>
                {page.index + 1}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default PageNav;
