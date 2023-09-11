export default class BubbleSort {
  execute(numbers) {
    let swapped = true;
    while (swapped) {
      swapped = false;
      for (let index = 0; index < numbers.length - 1; index++) {
        if (numbers[index] >= numbers[index + 1]) {
          let swapping = numbers[index];
          numbers[index] = numbers[index + 1];
          numbers[index + 1] = swapping;
          swapped = true;
        }
      }
    }
    return numbers;
  }
}
