# HW03-Password-Generator
Found live at: https://sungjk77.github.io/HW03-Password-Generator/

GitHub address: https://github.com/sungjk77/HW03-Password-Generator

last modified: 3/25/2021 @ 11:05 PM PST

------------
Use existing code to generate a random password.  Let the user confirm what sets will be included (Upper Case, Lower Case, Numbers, Symbols). Let the user also choose the length but must have a minimum and maximum value.

------------
## **_💻index.html_**

- Did not modify, left code as given.  Uploaded to github.

------------
## **_🎨style.css_**

- Did not modify, left code as given.  Uploaded to github.

------------
## **_📝script.js_**
- Created a string that encompassed the possible choices for password characters
- Generated a password based off of random character positions in the string.  Start off blank and added characters until it satisfied the length input
- Changed prompts to confirms
- Created a function that made sure that the length choice was valid
    - Added error correction to see if length was valid
    - Had it generate error messages
    - Continues until a valid choice is selected, used While loop
    - Had to do some research and used .isInteger along with ParseInt, didn't seem to work properly without.
- Added final error correction since it is possible the user would choose none of the possible types of characters.  The user's default password will be "password".

------------
## **_📸 Screen Shot:_** 
![alt text](assets\images\screenshot.JPG)



