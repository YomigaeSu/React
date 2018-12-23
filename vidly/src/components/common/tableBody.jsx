import React, { Component } from "react";
import _ from "lodash";
// items(movies): array
// columns(path,label,contet): array
//
class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);
    else return _.get(item, column.path);
  };

  getKey = (item, column) => {
    if (column.key) return item._id + column.key;
    else return item._id + column.path;
  };
  render() {
    const { items, columns } = this.props;
    return (
      <tbody>
        {items.map(item => (
          <tr key={_.get(item, "_id")}>
            {columns.map(column => (
              <td key={this.getKey(item, column)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
