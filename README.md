# HW03-Password-Generator
Found live at: https://sungjk77.github.io/HW03-Password-Generator/

GitHub address: https://github.com/sungjk77/HW03-Password-Generator

Screenshot: https://github.com/sungjk77/HW03-Password-Generator/blob/0ed4a1b0f1be67d4087fb1d6cc5e9877ef623ee3/assets/images/screenshot.JPG 

last modified: 3/25/2021 @ 11:05 PM PST

------------
Use existing code to generate a random password.  Let the user confirm what sets will be included (Upper Case, Lower Case, Numbers, Symbols). 
```language
  var myStrCaps ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var myStrLower = "abcdefghijklmnopqrstuvwxyz";
  var myStrNum = "0123456789";
  var myStrSymb = "!@#$%^&*?*+-";
```
Let the user also choose the length but must have a minimum and maximum value.

------------
## 💻 _**index.html**_

- Did not modify, left code as given.  Uploaded to github.

------------
## 🎨 _**style.css**_

- Did not modify, left code as given.  Uploaded to github.
------------
## 📝 _**script.js**_
- Created a string that encompassed the possible choices for password characters
- Generated a password based off of random character positions in the string.  Start off blank and added characters until it satisfied the length input
- Changed prompts to confirms
- Created a function that made sure that the length choice was valid
    - Added error correction to see if length was valid, updated so can choose min & max
    - Had it generate error messages
    - Continues until a valid choice is selected, used While loop
    - Had to do some research and used .isInteger along with ParseInt, didn't seem to work properly without.
- Added final error correction since it is possible the user would choose none of the possible types of characters.  The user's default password will be "password".

------------
## 📸 _**Screen Shot:**_
![alt text](https://raw.githubusercontent.com/sungjk77/HW03-Password-Generator/main/assets/images/screenshot.JPG)



