# Lab 8 - Starter
# James Cole

1. Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

Within a Github action whenever code is pushed

This is because we want to test our code iteratively in small chunks as it is added. Otherwise, we risk building upon faulty code with massive potential failures. We also want a way that is standardized and documented so all members of the project can add code and we can know they all adhered to the same standarads which is why we use Github actions and not just manually run the tests locally.

2. Would you use an end to end test to check if a function is returning the correct output? (yes/no)

No, the task of checking the output of an individual function is too small for an end to end test and would be better suited for a unit test.

3. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

No, this test is too high-level for a unit test as it involves an entire feature of the application instead of a smaller part of code. It would be better to use an end to end test for this.

4. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

No, For the same reason as the last question this is a test that concerns the larger application and the only way to really see if it would work is to use an end to end test to simulate a page and see if the feature is working there.