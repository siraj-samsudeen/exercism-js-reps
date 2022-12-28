## What are we going to learn

- TDD as a way to deepen our understanding of language
- Deeper knowledge of Git
- Use more shortcuts of VSCode
- Simple Practice Reps to build muscle memory of the core
- Logging practice for all the work done to capture work/errors/solutions

## How will Exercism help us

- Simple JS exercises to help us to understand all the features of the language thoroughly
- Looking at others' solution gives us 2 different benefits
  - How to use different features of the language to solve the same problem
  - How to use different approach to solve the same problem
- Exercism allows us to use a Test-Driven approach to solving the problem
  - We first write the code to pass the tests one by one
  - Then we try to write the tests ourselves and the code using a TDD process

## Getting Started

- Signup for a new account using GitHub
- Do Hello world exercise on the site
  - We use Jest as the testing framework
  - Jest uses describe/test blocks to structure tests
  - One test for each different behaviour
  - Run the tests first - see them fail and then write the code to make them pass
- Install CLI and configure it using the token
  - Configure workspace to `C:\Dev\Exercism` using `--workspace=<dir>`
- Install pnpm
- download hello-exercise locally
  - npm install to install dependencies
  - npm test to run tests once and exit
  - npm run watch to keep running the tests in watch mode
- submit the exercise once the tests pass
- Install Obsidian and write a log
- Install Chrome extension `Copy URL with Title (plain text/markdown)` https://chrome.google.com/webstore/detail/copy-url-with-title-plain/bpcogbhmkdjaohcmlghhkiohmldpnkoh

## TDD Process

- Red -> You can't write code until there is a failing test
- Green -> Write just enough code to make the test pass - cheat as much as possible
- Refactor -> Once the tests are green, see how you can change the design of the code to improve its readability and maintainability.

## Lasagna

- To create a new iteration for a problem, open it in the editor in the website, revert to start and run tests - then download using `--force` flag
- Always ask - **what is the smallest step I can take to move the test forward**?
- Learnt a number of VSCode shortcuts
- Build a safety net when refactoring by duplicating lines if that would help in having a clear idea.
- Once solution is submitted, check the community solutions - at least 3 of them.
