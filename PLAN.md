# mitch-morse-translator

## Eng > Morse

I want to input a string
I want to make that string go to uppercase because the morse code object is case insensitive
I want to split that string into an array of individual characters (split(/[A-Z]/)??)
I want to then compare each index of that array and match its character to the corresponding Key in the morse code object, and grab the value of that key.

- I then want to push the value of that key to a new array of morse characters, each morse character is it's own string in the array.
  Then I want to join that array to create the final translated string
  Then I want to write that to the inner HTML in the section underneath the form

If a new translation is made, it should erase the HTML of any prior translation

If an input is invalid, there should be an early exit within the translation (before the translation logic occurs) and an error message should be printed.

## Morse > Eng

I want to input a string
I want to split the string into an array of individual morse characters (split(" ")??)
I want to then compare each index of that array and match its character to the corresponding key in the english chracter object, and grab the value of that key. - I then want to push the value of that key to a new array of Uppercase english characters, each english character as it's own string in the array.
Then I want to join that array to create the final translated string
then I want to write that to the inner HTML in the section underneath the form

If a new translation is made, it should erase the HTML of any prior translation

If an input is invalid, there should be an early exit within the translation (before the translation logic occurs) and an error message should be printed.

## Tapper Logic

I want to input a series of morse characters using short and long intervals of button clicks
When the button is clicked, I want it to start a timer until the next button click

- If the timer is below a certain threshold, the input is registered as a dot
- If the timer is above a certain threshold, the input is registered as a dash
- If the timer hits a certain limit, that characters morse is finished and registered to the text input
- If the morse character is four keyes, the character is registered to the text input
