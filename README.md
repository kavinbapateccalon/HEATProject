# HEATProject

## Project Setup
### Install Java 17 jdk
https://www.oracle.com/java/technologies/downloads/#jdk17-windows
Follow this tutorial (I installed Java 17 JDK): https://www.youtube.com/watch?v=o2ktVETLww8&ab_channel=AmitThinks
After installing open a terminal and type: `java -version` you should see `Java 17.0.5` show
### Install maven and set environment variables
https://mkyong.com/maven/how-to-install-maven-in-windows/
After installing open a terminal and type: `mvn -version` you should see `Apache Maven 3.9.2` show
### Install Intellij IDE
If you are used to VsCode shortcuts like I am, you can change the Intellij keymap to use VsCode shortcuts: 
Ctrl alt s, keymap, install vs code keymap, restart Intellij, press Ctrl alt s again, change keymap to Vscode
### MySQL Setup
Now we need to setup and configure Apache, Xampp, the database, and an IDE for the database.  The database we will use is MySQL, and the best IDE for it is probably MySQL Workbench, however since I already had another IDE called PhpMyAdmin installed and configured using Xampp, I’m going to use that.  To Install Xampp, Apache, MySQL, and PhpMyAdmin: 
If you do not have Xampp installed, install and configure it using this guide: https://www.cs.virginia.edu/~up3f/cs4750/supplement/XAMPP-setup.html
Next configure phpmyadmin and the database using this guide: https://www.cs.virginia.edu/~up3f/cs4750/supplement/DB-setup-xampp.html
FYI Mysql is on `localhost:3306`, springboot is on `localhost:8080`
### Clone repo in a folder
Now that you have the repo cloned, you need to add some configurations for spring boot to talk to your MySQL database.  Open applications.properties in the src/main/resources folder and add the following configurations with the values you used when you set up php my admin and the database.  Use the phpmyadmin username for the username field and the /db_username field, password for password field.

`spring.datasource.url=jdbc:mysql://localhost:3306/db_username
spring.datasource.username=
spring.datasource.password=
spring.jpa.database-platform=org.hibernate.dialect.MySQL8Dialect
spring.jpa.show-sql=true
spring.jpa.hibernate.ddl-auto=update`


After configuring the database, click on the Run button (green arrow) to build and run the app.  If successful, open a browser window and type `localhost:8080` in the url.  This should take you to a default spring boot login page, where you can use `user` as the username, and the generated password in your terminal as the password to log in.  Since we don’t have any views it gives a `404` for now, but that means it’s working and spring boot is all setup.

