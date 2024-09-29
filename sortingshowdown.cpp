#include <iostream>
#include <vector>
#include <cstdlib>
#include <ctime>
#include <chrono>

std::vector<int> generateRandomArray(int size) {
    std::vector<int> array(size);
    for (int i = 0; i < size; ++i) {
        array[i] = rand() % 100; // Random numbers from 0 to 99
    }
    return array;
}

int partition(std::vector<int>& arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            std::swap(arr[i], arr[j]);
        }
    }
    std::swap(arr[i + 1], arr[high]);
    return i + 1;
}

void quickSort(std::vector<int>& arr, int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

void selectionSort(std::vector<int>& arr) {
    for (int i = 0; i < arr.size(); i++) {
        int minIndex = i;
        for (int j = i + 1; j < arr.size(); j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        std::swap(arr[i], arr[minIndex]);
    }
}

void heapify(std::vector<int>& arr, int size, int rootIndex) {
    int largest = rootIndex;
    int left = 2 * rootIndex + 1;
    int right = 2 * rootIndex + 2;

    if (left < size && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < size && arr[right] > arr[largest]) {
        largest = right;
    }
    if (largest != rootIndex) {
        std::swap(arr[rootIndex], arr[largest]);
        heapify(arr, size, largest);
    }
}

void heapSort(std::vector<int>& arr) {
    int length = arr.size();
    for (int i = length / 2 - 1; i >= 0; i--) {
        heapify(arr, length, i);
    }
    for (int i = length - 1; i >= 0; i--) {
        std::swap(arr[0], arr[i]);
        heapify(arr, i, 0);
    }
}

void printArray(const std::vector<int>& arr) {
    for (int value : arr) {
        std::cout << value << " ";
    }
    std::cout << std::endl;
}

int main() {
    srand(static_cast<unsigned int>(time(0))); // Seed for random number generation

    int algorithmChoice1, algorithmChoice2;
    int arraySize;

    std::cout << "Select the first sorting algorithm:\n";
    std::cout << "1. Quick Sort\n";
    std::cout << "2. Selection Sort\n";
    std::cout << "3. Heap Sort\n";
    std::cout << "Enter your choice (1-3): ";
    std::cin >> algorithmChoice1;

    std::cout << "Select the second sorting algorithm:\n";
    std::cout << "1. Quick Sort\n";
    std::cout << "2. Selection Sort\n";
    std::cout << "3. Heap Sort\n";
    std::cout << "Enter your choice (1-3): ";
    std::cin >> algorithmChoice2;

    std::cout << "Enter the size of the array: ";
    std::cin >> arraySize;

    if (arraySize <= 0) {
        std::cerr << "Invalid array size. Exiting.\n";
        return 1;
    }

    std::vector<int> originalArray = generateRandomArray(arraySize);
    std::cout << "Original Array:\n";
    printArray(originalArray);

    // Timing and sorting for Algorithm 1
    auto start1 = std::chrono::high_resolution_clock::now();
    std::vector<int> array1 = originalArray; // Copy for first sorting
    switch (algorithmChoice1) {
    case 1:
        quickSort(array1, 0, array1.size() - 1);
        break;
    case 2:
        selectionSort(array1);
        break;
    case 3:
        heapSort(array1);
        break;
    default:
        std::cerr << "Invalid choice. Exiting.\n";
        return 1;
    }
    auto end1 = std::chrono::high_resolution_clock::now();
    std::chrono::duration<double, std::milli> duration1 = end1 - start1;

    // Timing and sorting for Algorithm 2
    auto start2 = std::chrono::high_resolution_clock::now();
    std::vector<int> array2 = originalArray; // Copy for second sorting
    switch (algorithmChoice2) {
    case 1:
        quickSort(array2, 0, array2.size() - 1);
        break;
    case 2:
        selectionSort(array2);
        break;
    case 3:
        heapSort(array2);
        break;
    default:
        std::cerr << "Invalid choice. Exiting.\n";
        return 1;
    }
    auto end2 = std::chrono::high_resolution_clock::now();
    std::chrono::duration<double, std::milli> duration2 = end2 - start2;

    std::cout << "Sorted Array (Algorithm 1):\n";
    printArray(array1);
    std::cout << "Sorting Time (Algorithm 1): " << duration1.count() << " ms\n";

    std::cout << "Sorted Array (Algorithm 2):\n";
    printArray(array2);
    std::cout << "Sorting Time (Algorithm 2): " << duration2.count() << " ms\n";

    return 0;
}