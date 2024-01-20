# React Testing and Debugging

This project demonstrates best practices for testing and debugging React applications using Jest, Flow, and ESLint.

## Table of Contents

- [Getting Started](#getting-started)
- [Testing](#testing)
  - [Running Tests](#running-tests)
  - [Test Coverage](#test-coverage)
- [Debugging](#debugging)
- [Linting](#linting)
- [Flow Type Checking](#flow-type-checking)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/mrinmoy32/React-Testing-and-Debugging
   cd react-testing-debugging
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Testing

### Running Tests

To run tests, use the following command:

```bash
npm test
```

This will run Jest and execute all test suites.

### Test Coverage

You can generate a coverage report using:

```bash
npm test -- --coverage
```

This will create a `coverage` directory containing HTML reports.

## Debugging

For debugging, you can use the browser's built-in debugging tools or integrate with VSCode or any other preferred IDE.

1. **Browser Debugging:**

   - Run your application in development mode.
   - Open the browser's developer tools (usually with `F12` or right-click and select 'Inspect').
   - Navigate to the 'Sources' tab to set breakpoints, inspect variables, and step through code.

2. **VSCode Debugging:**

   - Ensure you have the [VSCode Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) extension installed.
   - Open the project in VSCode.
   - Add breakpoints in your code.
   - Press `F5` to start debugging.

## Linting

Linting is done using ESLint to maintain a consistent code style.

To lint your code, use:

```bash
npm run lint
```

To automatically fix lint issues, run:

```bash
npm run lint:fix
```

## Flow Type Checking

This project uses Flow for static type checking.

To check for Flow errors, use:

```bash
npm run flow
```

## Contributing

Feel free to contribute by opening issues or submitting pull requests. Please follow the [Contributing Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
