async function performSort() {
    const algorithm1 = document.getElementById("algorithm1").value;
    const algorithm2 = document.getElementById("algorithm2").value;
    const arraySize = parseInt(document.getElementById("array-size").value);

    if (!arraySize || arraySize <= 0) {
        alert("Please enter a valid array size.");
        return;
    }

    if (algorithm1 === algorithm2) {
        alert("Choose a different algorithm for comparison.");
        return;
    }

    const array = generateRandomArray(arraySize);
    console.log("Original Array:", array);

    const array1 = [...array];
    const array2 = [...array];

    // If array size <= 70, visualize the original array
    if (arraySize <= 70) {
        visualizeArray(array, "original-array");
    }

    // Timing and sorting for Algorithm 1
    const start1 = performance.now();
    await sortArray(array1, algorithm1, "algorithm1-array", arraySize); // Await sorting for algorithm 1
    const end1 = performance.now();
    document.getElementById("algorithm1-time").textContent = `Time: ${(end1 - start1).toFixed(2)} ms`;

    // Timing and sorting for Algorithm 2 (sequentially, after Algorithm 1)
    const start2 = performance.now();
    await sortArray(array2, algorithm2, "algorithm2-array", arraySize); // Await sorting for algorithm 2
    const end2 = performance.now();
    document.getElementById("algorithm2-time").textContent = `Time: ${(end2 - start2).toFixed(2)} ms`;

    console.log("Sorted Array (Algorithm 1):", array1);
    console.log("Sorted Array (Algorithm 2):", array2);
}

// Generate Random Array
function generateRandomArray(size) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * 100));
}

// Visualize the array with bars
function visualizeArray(arr, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Clear previous bars
    arr.forEach(value => {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = `${value}%`;
        bar.style.width = `${100 / arr.length}%`;
        container.appendChild(bar);
    });
}

// Sort array and visualize sorting process
async function sortArray(array, algorithm, containerId, arraySize) {
    const visualize = arraySize <= 70; // Only visualize if array size is <= 70

    switch (algorithm) {
        case 'quicksort':
            await quickSort(array, 0, array.length - 1, containerId, visualize);
            break;
        case 'selectionsort':
            await selectionSort(array, containerId, visualize);
            break;
        case 'heapsort':
            await heapSort(array, containerId, visualize);
            break;
        default:
            return array;
    }

    return array;
}

// Quick Sort Algorithm with optional visualization
async function quickSort(arr, low, high, containerId, visualize) {
    if (low < high) {
        const pi = partition(arr, low, high);
        if (visualize) visualizeArray(arr, containerId);
        await delay(10); // Visual delay
        await quickSort(arr, low, pi - 1, containerId, visualize);
        await quickSort(arr, pi + 1, high, containerId, visualize);
    }
    return arr;
}

function partition(arr, low, high) {
    const pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}

// Selection Sort Algorithm with optional visualization
async function selectionSort(arr, containerId, visualize) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        if (visualize) visualizeArray(arr, containerId);
        await delay(10); // Visual delay
    }
    return arr;
}

// Heap Sort Algorithm with optional visualization
async function heapSort(arr, containerId, visualize) {
    const length = arr.length;
    for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
        heapify(arr, length, i);
    }

    for (let i = length - 1; i >= 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
        if (visualize) visualizeArray(arr, containerId);
        await delay(10); // Visual delay
    }
    return arr;
}

function heapify(arr, size, rootIndex) {
    let largest = rootIndex;
    const left = 2 * rootIndex + 1;
    const right = 2 * rootIndex + 2;

    if (left < size && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < size && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== rootIndex) {
        [arr[rootIndex], arr[largest]] = [arr[largest], arr[rootIndex]];
        heapify(arr, size, largest);
    }
}

// Utility to add a delay for visualizing sorting
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
