function binarySearch(arr, x) {
  start = 0;
  end = arr.length - 1;
  while (start < end) {
    mid = (start + end) / 2;
    if (x < arr[mid]) {
      end = mid - 1;
    } else if (x > arr[mid]) {
      start = mid + 1;
    } else {
      return arr[mid];
    }
  }
  if(arr[start] == x){
    return arr[start]
  } else {
    return -1
  }
}
// return 1
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 2));
// return 5
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 6));
// return 0
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 1));
// return 6
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 7));
//return -1
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 9));
