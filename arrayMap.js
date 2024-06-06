function hasSubarrayWithSum(arr, target) {
    let start = 0;
    let sum = 0;

    for (let end = 0; end < arr.length; end++) {
        sum += arr[end];
        while (sum > target && start <= end) {
            sum -= arr[start++];
        }
        if (sum === target) {
            return true;
        }
    }
    return false;
}

const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(hasSubarrayWithSum(arr, target));
