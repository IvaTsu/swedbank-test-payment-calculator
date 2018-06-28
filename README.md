# Swedbank Test Task

### To run the project:

- `git clone https://github.com/IvaTsu/swedbank-test-payment-calculator.git` or download ZIP archive,
- `cd swedbank-test-payment-calculator/`
- `npm i` or `yarn` // to install dependencies
- `npm start` or `yarn start` to start the project

### Possible errors:
- `node-sass` binding problem/conflict with your `Node` version. Current binding done with `node v10.5.0`.
- If you have such problem upgrade your Node version or Run `npm rebuild node-sass --force` to build the binding for your current environment.

### Note:

- There is no `production` configuration for `webpack`, so `dist` folder has no compiled files (.js, .css, etc.)  