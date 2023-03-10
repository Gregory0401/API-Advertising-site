# API Application with advertisements for finding, buying, selling pets.


### During the development were used:

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) ![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge) ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white) ![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white)


### Features

- **Auth**

    -  ![POST](https://img.shields.io/badge/POST-green)  **`/auth/register`**      *Create a new user*
    -  ![POST](https://img.shields.io/badge/POST-green)  **`/auth/login`**     *User authentication*
    -  ![POST](https://img.shields.io/badge/POST-green)  **`/auth/refresh`**     *Get new pair of tokens (use Bearer {refreshToken} instead of accessToken)*
    -  ![GET](https://img.shields.io/badge/GET-blue)  **`/auth/google`**     *Authorization on the site using Google OAuth API*
    -  ![GET](https://img.shields.io/badge/GET-blue)  **`/auth/logout`**     *Logout*
   
   
- **Services-sidebar**  
    -  ![GET](https://img.shields.io/badge/GET-blue)  **`/friends`**     *Get contact information about services that provide services*


- **News**
    -  ![GET](https://img.shields.io/badge/GET-blue)  **`/news`**     *Get news*

- **User**
    -  ![GET](https://img.shields.io/badge/GET-blue)  **`/user/userinfo`**     *Get current user*
    -  ![PATCH](https://img.shields.io/badge/PATCH-grey)  **`/user/update`**     *Update contact information about the user by token in headers Autorization*
    -  ![POST](https://img.shields.io/badge/POST-green)  **`/user/userpets`**     *Create pet*
    -  ![DELETE](https://img.shields.io/badge/DELETE-red)  **`/user/pets/{petId}`**    *Deleted pet by id*

- **Notices**
   -  ![POST](https://img.shields.io/badge/POST-green)  **`/notices/addnotice`**      *Add new notice*
   -  ![GET](https://img.shields.io/badge/GET-blue)  **`/notices/category`**           *Get information by category*
   -  ![GET](https://img.shields.io/badge/GET-blue)  **`/notices/user/own`**          *Get information about user notification*
   -  ![GET](https://img.shields.io/badge/GET-blue)  **`/notices/user/favorite`**     *Get information by favorite*
   -  ![PATCH](https://img.shields.io/badge/PATCH-grey)  **`/notices/user/:id/favorites`**     *Updating information about the user's favorite notice by token in headers Autorization*
   -  ![DELETE](https://img.shields.io/badge/DELETE-red)  **`/notices/user/:id/favorites`**    *Deleting information about the user's favorite notice by token in headers Autorization*
   -  ![DELETE](https://img.shields.io/badge/DELETE-red)  **`/notices/user/:id`**    *Deleting user notification information by token in headers Autorization*
