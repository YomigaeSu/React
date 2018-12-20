import React from "react";
const ListGroup = props => {
  const {
    items,
    textProperty,
    valueProperty,
    selectedFilter,
    onFilterItems
  } = props;
  return (
    <ul className="list-group">
      {items.map(item => (
        <li
          className={
            item === selectedFilter
              ? "list-group-item active"
              : "list-group-item"
          }
          key={item[valueProperty]}
          style={{ cursor: "pointer" }}
          onClick={() => onFilterItems(item)}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default ListGroup;
