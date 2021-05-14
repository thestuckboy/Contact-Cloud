# Version 0.12

## Contact Cloud, a service where you can locate all your contact info, such as **name**, **lastname** and **number**.

![Home Page](https://i.imgur.com/QVTT5Ph.png)
<hr>

![Create Page](https://i.imgur.com/JlV0MBO.png)
<hr>

![Contacts Page](https://i.imgur.com/ZIAcP38.png)

<hr>

## New things:

* Improvements in 'create' and 'contacts' routes
    * Now if there is not contact, it'll show an advice.
    * Now there is form validation of 'create' route's form.

        * The data is sended via ```XMLHttpRequest``` Web API (see ```/js/create.js``` || line ```7```)
    
    <hr>

    * Delete button now working. Solved some bugs about this one.
    * Minimal changes in ```index.js``` (node)

### **Technologies used in this project**:

* Node.js
* Express.js
* EJS Render Template
* Bootstrap 5
* MySQL
* Git

<hr>

* HTML5
* CSS3
* JavaScript

### **Install the project**:

#### Step 1. Clone:

    git clone https://github.com/thestuckboy/Contact-Cloud.git

#### Step 2. Install node modules:

    npm install

#### Step 3. Configure MySQL data connection in ``` modules/mysql.config.js ```

##### Read [documentation](https://www.npmjs.com/package/mysql) of MySQL module for more information.

<br>

#### Step 4. Execute MySQL Query from: ``` db/database.db ```

<br>

#### Step 5. Init the project with nodemon:

    npm start
