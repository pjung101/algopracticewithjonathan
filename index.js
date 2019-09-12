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

function isPalidrome(x) {
  arr = [];
  for (let i = 0; i < x.length; i++) {
    if (x[i] != x[x.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
// true
console.log(isPalindrome('racecar'))
// true
console.log(isPalindrome('bob'))
// false
console.log(isPalindrome('cat'))
// false
console.log(isPalindrome('apple'))

function fibonacci(n){
count = 2;
  arr = [0, 1];
  z = 0;
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  }
  while (n != count - 1) {
    z = arr[0] + arr[1];
    arr[0] = arr[1];
    arr[1] = z;
    count++;
  }
  return z;
}
// 5
console.log(fibonacci(5))
// 2
console.log(fibonacci(3))
// 21
console.log(fibonacci(8))
// 13
console.log(fibonacci(7))
