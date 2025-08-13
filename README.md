# OIBSIP_WebDevelopment_1
# JavaScript Expression Calculator

This is a modern, stylish calculator built with HTML, CSS, and an object-oriented approach in JavaScript. This version can handle multi-step expressions and respects the order of operations using parentheses, thanks to its `eval()`-based computation engine.

![Calculator Screenshot](./calculator_screenshot.png)
*(Note: Remember to take a screenshot of your finished calculator and save it as `calculator_screenshot.png` in the project folder to make it visible here.)*

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

*You can add a link here if you deploy your project using a service like GitHub Pages, Netlify, or Vercel.*

[Link to Live Demo]()

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
