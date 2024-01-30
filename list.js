function processList(inputList) {
    // Checking if the length of the list is a multiple of 10
    if (inputList.length % 10 !== 0) {
        console.log("Error: The length of the list must be a multiple of 10.");
        return;
    }

    // Remove items at positions which are a multiple of 2 or 3
    const modifiedList = inputList.filter((_, index) => (index + 1) % 2 !== 0 && (index + 1) % 3 !== 0);

    console.log("Original List:", inputList);
    console.log("Modified List:", modifiedList);
}

// usage
const inputList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
processList(inputList);
