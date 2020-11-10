# QA-Automation-Test
Here is the instruction:
These tests have been written for Cypress
Thus ,first of all, you need to add Cypress to your computer.
The detailed instruction could be found here via the official link
docs.cypress.io/guides/core-concepts/introduction-to-cypress.html#Cypress-Can-Be-Simple-Sometimes

or you can use these videos
Setup on Windows video https://www.youtube.com/watch?v=F53rDUwiAbU&list=PLUDwpEzHYYLu4jKg-rNSKH3aJeBinlPXp&index=2
Setup on Mac video https://www.youtube.com/watch?v=HZ8nhPEKQm8&list=PLUDwpEzHYYLu4jKg-rNSKH3aJeBinlPXp&index=3

After successful setup, you can run tests via Cypress
Add to your Visual Studio Code test from Git by using the link (all tests have been pushed to the main branch from the second one).
You need to click on the Source control button and take files from the Git, using this link
https://github.com/AnnaSarancha-qa/QA-Automation-Test.git

Tests should be placed in the integration folder
Then you have a few options:
1.To open Test Runner use next command:
npx cypress open
or
node_modules\.bin\cypress open
After this window with your tests will open and you just need to click on the needed file or run all test inside the integration folder (it is better to delete all the examples if they appeared)
Also, here is the link with test runner description
https://docs.cypress.io/guides/core-concepts/test-runner.html#Overview

2.To run inside VSC
npx cypress run (it is better to delete examples folder from the integration)
or
node_modules\.bin\cypress run (it is better to delete examples folder from the integration)
