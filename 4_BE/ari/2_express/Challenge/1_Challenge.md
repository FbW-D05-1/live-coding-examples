# BMI Routing Challenge

We're going to turn the previous Calculator code we wrote into a real website using what we've learnt in this module. Follow the steps below to complete the challenge:

1. Create a new file called bmiCalculator.html inside the Calculator folder from the last challenge 

2. Add the HTML boilerplate and set the page title to BMI Calculator

3. Add an HTML form, this form will make a post request to our server at the route /bmicalculator. The form will have 2 inputs, weight and height with placeholder text that tell the user what they should type into which text box. 

4. Add a button which says “Caculate BMI”

5. Add the get and post methods for the /bmicalculator route into the same server.js file we've been using

6. Use sendFile() to send the bmiCalculator.html page as a response inside the get method.

6. Add an h1 that says BMI Calculator

7. Inside server.js , create 2 variables, one for weight and one for height. 

8. Use the BMI calculator code you wrote previously, or write some new code to calculate and send back the result as text. It should read something like "Your BMI is n" where n is equal to the calculated BMI based on their weight and height inputs.


Note: BMI's can have floating point numbers.


Extra: add a check to see if the body fat is too high or too low