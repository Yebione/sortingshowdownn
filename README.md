# Sorting Showdown

**Sorting Showdown** is an interactive app designed to visualize and compare the performance of various sorting algorithms. The app allows users to see the differences in speed and efficiency between two major programming paradigms: **compiled** (C++) and **interpreted** (JavaScript).

## Features

- Visualizes sorting algorithms with real-time animations.
- Compares the performance of algorithms in both **C++** (compiled) and **JavaScript** (interpreted).
- Currently supports **Heap Sort**, **Quick Sort**, and **Selection Sort**.
- User-friendly interface to select and start sorting.

## Technologies Used

- **C++** for the backend comparison of compiled sorting algorithms.
- **JavaScript** for the interpreted version of sorting algorithms.
- **Python** for additional backend logic and support.

## How It Works

The app compares three sorting algorithms side by side:
1. **Heap Sort**: A comparison-based algorithm that builds a heap from the data and then sorts it.
2. **Quick Sort**: A faster, more efficient algorithm that uses divide-and-conquer to sort data.
3. **Selection Sort**: A simple, intuitive algorithm that selects the smallest element and places it in the correct position.

You can run the sorting algorithms and visualize their behavior, comparing their speed and performance in **C++** and **JavaScript**.

## Installation and Usage

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/sorting-showdown.git
    ```

2. Navigate to the project folder:
    ```bash
    cd sorting-showdown
    ```

3. Compile the C++ program:
    ```bash
    g++ -o SortingShowdown sorting_showdown.cpp
    ```

4. Run the C++ program:
    ```bash
    ./SortingShowdown
    ```

5. Run the JavaScript version:
    Open the `index.html` file in your browser to see the JavaScript sorting visualizations.

## Future Plans

- Add more sorting algorithms (Merge Sort, Bubble Sort, etc.).
- Further optimize the performance comparison between **C++** and **JavaScript**.
- Extend support for larger datasets.
