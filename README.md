# OIBSIP_WebDevelopment_1
# JavaScript Calculator

This is a modern, stylish calculator built with HTML, CSS, and an object-oriented approach in JavaScript. This version can handle multi-step expressions and respects the order of operations using parentheses, thanks to its `eval()`-based computation engine.

<img width="630" height="952" alt="Image" src="https://github.com/user-attachments/assets/b086e215-2877-4dee-89ac-4800ef9f0ca6" />

## Table of Contents

- [Features](#features)
- [Live Demo](#live-demo)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [How to Run](#how-to-run)
- [Code Breakdown](#code-breakdown)
  - [HTML (`index.html`)](#1-html-indexhtml)
  - [CSS (`style.css`)](#2-css-stylecss)
  - [JavaScript (`script.js`)](#3-javascript-scriptjs)
- [A Note on `eval()`](#a-note-on-eval)

## Features

-   **Standard Arithmetic**: Addition ($+$), Subtraction ($-$), Multiplication ($\times$), and Division ($\div$).
-   **Order of Operations**: Correctly handles parentheses `()` to define the order of calculation.
-   **Full Expression Display**: Shows the entire expression as you type.
-   **Delete (DEL)**: Erase the last character entered.
-   **All Clear (AC)**: Completely reset the calculator.
-   **Error Handling**: Displays an "Error" message for invalid calculations (e.g., division by zero).
-   **Stylish UI**: A responsive, grid-based layout with a sleek purple gradient theme.

## Live Demo

[[Live Demo](http://127.0.0.1:3000/Calculator/index.html)]

## Technologies Used

-   **HTML5**: Structures the calculator and its components using semantic tags and data attributes.
-   **CSS3**: Provides the visual styling, including the layout and color scheme.
    -   **CSS Grid**: Used to create the clean, four-column button alignment.
    -   **Flexbox**: Used within the output display for alignment.
-   **Vanilla JavaScript (ES6)**: Implements all the calculator's logic using an object-oriented approach.
    -   **Calculator Class**: The logic is encapsulated in a `Calculator` class for better organization and state management.
    -   **DOM Manipulation**: Selects and updates elements based on user interaction.
    -   **Event Listeners**: Captures clicks on all buttons to trigger calculator functions.

## Project Structure

The project code is cleanly separated into three distinct files:
calculator/
- ──index.html      #The HTML file for content and structure
- ──style.css       #The CSS file for all styling
- ──script.js       #The JavaScript file for logic and interactivity

- ## How to Run

To get a local copy up and running, follow these simple steps:

1.  **Download the Files**: Download the `index.html`, `style.css`, and `script.js` files into a single folder on your computer.
2.  **Open in Browser**: Navigate to the folder and open the `index.html` file with any modern web browser.

The calculator will be fully functional and ready to use.

## Code Breakdown

Here’s a closer look at how each file contributes to the project.

### 1. HTML (`index.html`)

The HTML file sets up the calculator's structure. Key elements include:

-   A main container `div` with the class `.calculator-grid`.
-   An `.output` `div` that holds the `.previousOperand` and `.currentOperand` displays.
-   `<button>` elements for all inputs. Crucially, they use `data-*` attributes (e.g., `data-number`, `data-operation`, `data-bracket`) to classify their function, making them easy to target with JavaScript.

### 2. CSS (`style.css`)

The stylesheet is responsible for the calculator's appearance.

-   A purple `linear-gradient` is used for the body background.
-   The `.calculator-grid` uses `display: grid` and `grid-template-columns: repeat(4, 100px)` to create the 4-column layout for the buttons.
-   The `.output` display uses `grid-column: 1 / -1;` to span all four columns.
-   Button styles, including hover and active states, provide visual feedback to the user.

### 3. JavaScript (`script.js`)

This file contains the calculator's "brain" and is built around a `Calculator` class.

-   **`Calculator` Class**: This class manages the state of the calculator, including the `currentOperand` and `previousOperand`.
-   **`constructor()`**: Initializes a new calculator object and resets it to a default state.
-   **`appendCharacter(character)`**: This method is called when a number, operator, or bracket is clicked. It simply adds the character to the `currentOperand` string and updates the display.
-   **`delete()`**: Removes the last character from the `currentOperand` using `slice(0, -1)`.
-   **`compute()`**: This is the core function.
    -   It takes the entire expression string stored in `currentOperand`.
    -   It uses the built-in `eval()` function to calculate the result of the expression.
    -   This is wrapped in a `try...catch` block to gracefully handle any syntax errors or invalid math operations (like `10 / 0`), displaying "Error" if something goes wrong.
    -   On a successful calculation, the display is updated with the result.

## A Note on `eval()`

This calculator uses the `eval()` function for its computation, which is a powerful tool for evaluating a string of JavaScript code. While it works perfectly for this self-contained project, it is important to be aware of the security risks. Using `eval()` with arbitrary user input on a live website can be dangerous, as it could allow malicious code to be executed.

For a simple calculator like this, it's a quick and effective solution. For a production application, it would be safer to write a custom function that parses the expression and calculates the result step-by-step.
