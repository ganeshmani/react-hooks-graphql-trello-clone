export default function (removedIndex, addedIndex, arr) {
  let pos;
  if (addedIndex === arr.length - 1) {
    pos = arr[arr.length - 1].pos + 16384;
  } else if (addedIndex === 0) {
    pos = arr[0].pos / 2;
  } else if (addedIndex < removedIndex) {
    let beforePOS = arr[addedIndex - 1].pos;
    let afterPOS = arr[addedIndex].pos;

    pos = (beforePOS + afterPOS) / 2;
  } else if (addedIndex > removedIndex) {
    let beforePOS = arr[addedIndex + 1].pos;
    let afterPOS = arr[addedIndex].pos;

    pos = (beforePOS + afterPOS) / 2;
  }

  return pos;
}
