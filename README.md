# JavaScript Project

## Summary

This is your JavaScript project. Ensure that each milestone is submitted to your GitHub repository.

### v1.0 - Submit by 1/4

#### Features

- Build a simple website that displays the text: “The Fibonacci of X is Y”, where X and Y are numbers set in your JavaScript code (actual numbers should be shown instead of placeholders).
- Define X and Y as JavaScript variables. These values should be dynamically added to the HTML using JavaScript—do not hardcode them directly into the HTML file.
- Research and understand what a Fibonacci number is.

### v1.1 - Submit by 6/4

#### Features

- Instead of manually assigning Y, calculate the Fibonacci sequence using a for loop.
- Wrap this calculation in a function that takes X as an argument and returns Y.
- Call the function, retrieve the result, and update the HTML to display it to the user.

### v1.2 - Submit by 10/4

#### Features

- Add an input field (type: number) to calculate Fibonacci values dynamically.
- Follow the first row of the provided Figma design.
- Attach a onblur event listener to the input, which triggers a function that:
  - Reads the number input by the user
  - Computes its Fibonacci value
  - Displays the result on the page

### v2.0 - Submit by 17/4

#### Features

- Set up and run the fibonacci-server (repo link is: https://github.com/Grunitech-frontend-examples/fibonacci-server, refer to the README file for setup instructions).
- Create a function that makes a request to the server at: http://localhost:3000/calculate/:number, where :number is the input value to be computed.
- Display the server’s response (the computed Fibonacci number) on the webpage.
- Replace your previous local Fibonacci calculation with this server-based approach.
- Add a reset button on the right side of the screen
- Show a loading indicator while the server processes the request.

### v2.1

#### Features - Submit by 24/4

- If the input value exceeds 20, display an error message and prevent the request from being sent.
- Test sending 123 as input; the server will return an error. Handle this error gracefully and display the appropriate message to the user (refer to the fetch() documentation for error handling).
- Follow the second row of screens in the Figma design.

### v2.2

#### Features

- Implement a function that fetches previously submitted Fibonacci calculations from the server at: http://localhost:3030/results.
- Call this function when the page loads to retrieve and display past calculations.
- Display the retrieved calculations in a list below the Fibonacci calculator.
- Ensure the list updates every time a new calculation is submitted (Tip: - Create a helper function that processes the server response and updates the HTML accordingly).
- Follow the third row of screens in the Figma design.

### v2.3 - Submit by 4/5

#### Features

- Convert all functions using Promises into async/await syntax for better readability and maintainability.

### v3.0 - Submit by 8/5

#### Features

- Add a checkbox labeled "Save Calculation" below the calculator. When checked:
- Perform the Fibonacci calculation via the server (ensuring it gets saved and appears in the list).
- When unchecked:
  - Compute the Fibonacci value locally without making a server request.
  - Do not save the result in the list.
- Follow the fourth row of screens in the Figma design.

### v3.1 - Extra credit

#### Features

- Add a radio button group allowing users to sort the list by date (ascending or descending).
- Whenever a sorting option is selected, reorder the list accordingly.
- Follow the fifth row of screens in the Figma design.
