## This is the documentation that explains A/B testing without using 3rd party tools.
a) This is a simple implementation using vanilla Javascript code that displays the relevant user group messages per visitor on the HTML page using two JS files.
b) The group allocation has been implemented using even or odd numbers which then gets split into 50% traffic
c) To display the same recurring user group message on the HTML page, a session storage is used to store the random number generated per visitor

## To test the functionality,
a) Open the file AB_testing/index.html in the browser
b) If the random number generated on the page for the visitor is an odd number -> this displays `This is group A` message on the page 
else if it is an even number -> this displays `This is group B` message on the page 
c) To further test it, delete the session storage to get different messages based on generated random numbers