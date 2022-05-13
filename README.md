# 📚 BookEmporium

Fictional internet platform that offers mediation between those who sell and those who are looking for books to buy. This project related to SoftUni's JS Web Developer learning path.

 ## Built With

- IDE:
  - [Visual Studio Code](https://code.visualstudio.com/ "Visual Studio Code")
- Front-End:
  - [ReactJS library](https://reactjs.org/ "ReactJS library")
  - [React Router Dom v5](https://v5.reactrouter.com/ "React Router Dom v5")
  - [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript "JavaScript")
- Markup Languages:
  - [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML "HTML5")
  - [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS "CSS3")
  - [CSS Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries "CSS Media Queries")
- Back-End:
  - [Firebase 9.4.1](https://firebase.google.com/ "Firebase 9.4.1")
    - Firebase SDK API (to interaction between front-end and back-end)
    - Cloud Firestore (as a database)
    - Cloud Storage (to uploading files)
    - Firebase Authentication API
- Web Server:
  - [Firebase Hosting](https://firebase.google.com/docs/hosting "Firebase Hosting")
- Version Control System:
  - [Git](https://github.com/ "Git")
  - [Github](https://git-scm.com/ "Github")
- Additionals:
  - [TortoiseGit](https://tortoisegit.org/ "TortoiseGit")
  - [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG "SVG")
  - [Font Awesome Icons](https://fontawesome.com/icons "Font Awesome Icons")
  - [Info about books](https://www.goodreads.com/ "Info about books")

## Functionality

### Public (guests)

- Home Page
    - initial page with beautiful background image and button refers to catalog page)
- Catalog Page
    - shows all books from database
    - can make orders and see all the details related to specific book
- Details Page 
    - shows all details related to specific book
- Login Page (Sign In)
    - can only be accessed by public users
- Register Page (Sign Up)
    - can only be accessed by public users
- Terms and Condition Page
- About Us Page
- Contacts Modal 
    - related to showing useful contacts
- Cart Modal
    - related to list all the books that users added into cart

### Private (users)

- Create Page
    - logic related to adding new book in database
    - only registered and logged in users can create books
    - creators cannot place orders to their books
- Profile Page 
    - registration is required for accessibility
    - user can add your own profile picture
    - user can change his credentials (email and password)
    - list all books that user have created
- Edit Page
    - creator can edit his own book
    - visible for user who are the creator of book
- Sign Out Button
    - placed in Header and visible only to logged-in users

## License

Distributed under the MIT License. See `LICENSE` for more information.
