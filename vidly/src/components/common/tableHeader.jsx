import React, { Component } from "react";
// columns : array
// sortColumn: object
// onSort : function
class TableHeader extends Component {
  raiseSort = path => {
    let sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  renderSortIcon = column => {
    const { sortColumn } = this.props;

    if (sortColumn.path !== column.path) return null;
    if (sortColumn.order === "asc")
      return <i className="fa fa-sort-asc" aria-hidden="true" />;
    else return <i className="fa fa-sort-desc" aria-hidden="true" />;
  };
  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map(column => (
            <th
              className="clickable"
              key={column.label || column.key}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
