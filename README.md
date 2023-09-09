# Demo Modal Window Project

visit: https://demo-modal-window.netlify.app/

This is a simple HTML, CSS, and JavaScript project that demonstrates the creation of a modal window. Modal windows are commonly used in web design to display additional content or functionality without navigating away from the current page. In this project, we've created a responsive modal window that can be triggered by clicking on buttons.

## Project Files

The project consists of the following files:

- **index.html**: This is the main HTML file containing the structure of the web page, including the modal window and buttons.
- **css/style.css**: This CSS file contains the styles for the main page layout, buttons, and modal window.
- **css/queries.css**: Additional CSS styles for responsiveness using media queries.
- **js/script.js**: The JavaScript file that handles the functionality of opening and closing the modal window.

## HTML Structure

- The HTML file (`index.html`) is structured with a header containing meta tags, stylesheets, and the title.
- Buttons with the class "show-modal" are provided to trigger the modal window.
- The modal window itself is contained within a `div` element with the class "modal." It contains a close button, a title (`h1`), and content (`p`).

## CSS Styling

- CSS is used to style the page layout, buttons, and modal window.
- Responsive design is achieved using media queries for different screen sizes (tablets, mobile phones).
- The "hidden" class is used to hide the modal and overlay initially.

## JavaScript Functionality

- JavaScript (`script.js`) is used to add interactivity to the project.
- The script selects the modal and overlay elements and buttons for opening and closing the modal.
- It defines functions for opening and closing the modal, as well as handling the "Escape" key to close the modal.
- Event listeners are set up to trigger these functions when buttons are clicked, the overlay is clicked, or the "Escape" key is pressed.

## Usage

To use this demo modal window project, follow these steps:

1. Open the `index.html` file in a web browser.
2. Click on the "Show Modal" buttons to open the modal window.
3. Click the "×" button or the overlay to close the modal.
4. Press the "Escape" key to close the modal if it's open.

## Responsive Design

This project is designed to be responsive and adapt to different screen sizes. It includes media queries to adjust font sizes and styles for tablets and mobile phones in both portrait and landscape orientations.

Feel free to use this project as a starting point for your own modal window implementations in your web development projects. You can customize the styles and content of the modal to suit your needs.
