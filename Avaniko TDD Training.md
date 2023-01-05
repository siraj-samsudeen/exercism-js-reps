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
- Make a copy of any community solutions that you find interesting or educational by adding them as function redefinition by assigning the new function declaration to the function name `xyz = function xyz() {..}`

## Intro to Git

- version control - commit = Take a snapshot of a folder at a given point in time.
- to tell git to manage a folder, go inside that folder and `git init`
- understand the following ideas
  - working directory, index and object database
  - branch is a moving pointer to a commit
  - tag is a fixed pointer to a commit
  - a remote-tracking branch is created each time you set up a remote
  - comparisons are run between your local branch and the remote-tracking branch
  - if your remote-tracking branch is not updated frequently, you might face the situation that `git status` tells you everything is up-to-date, but the remote repo has newer commits than your local branch
- git status and git log are your friends - use them to land on any new directory and before and after each commit
  - git log --oneline will list all commits on a line

## git development workflow

- release work goes on the main/master branch
- for each new issue, bug-fix, feature, create a new branch using `git branch xyz` and switch to it using `git switch/checkout xyz`
- branch name should be like this `2-image-alignment-bug` -> start with
- do the commits needed to implement in the branch with commit messages referencing the issue using `fix #2 - image alignment`
- when you are ready to merge, first run `git pull & git merge master` to pull any latest work committed in GitHub.
- switch to master/main using `git switch master/main`
- now run `git merge branch-name` - ideally, this should be a fast-forward commit if you have the previous steps properly.
- Once the work is merged, delete the branch using `git branch -d branch-name`

## Practice Reps for Exercism

- After you complete the exercise and reviewed community solutions, decide whether you want to practice this exercise
  - if you find any aspect of the exercise difficult or unfamiliar, you should practice
  - if you find any community solution interesting or educational, then you can practice them also
- Switch to the Git repo for practice `exercism-js-reps`
- Do git status and git log --oneline to check where you are
- on Master branch
  - create the spec.js and the code file by using the Test-Driven Development process I have shown to you
    - do not take their spec as final.
    - refer only to the problem description and write your test spec. Refer to their tests only if you are stuck
    - Otherwise, finish your spec and the code and get all the tests to pass - then at the end you can compare it to their spec.
  - when to commit
    - each time you get a green test, commit
    - each time you refactor, commit
    - do NOT commit code that is NOT working.
- on rep branches
  - create a branch for each rep - rep1, rep2, etc.
  - on day 1, try to reproduce the test and code using TDD on rep1 branch
  - Once you complete, compare the master using `git diff master -- fileNames`
  - on day 2, use rep2 branch
- Do at least 3 practice reps for each problem - you can do more if you are not comfortable after 3 reps.
- The more you exercise your brain to recall concepts, the better you would be proficient at coding fast using your muscle memory.
