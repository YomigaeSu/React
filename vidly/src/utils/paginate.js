import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  //pick the items[startIndex...pageNumber*pageSize-1]:[0...3],[4...7]
  // lodash warp the items: _(items)
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
  //convert lodash warp into normal array : .value()
}
