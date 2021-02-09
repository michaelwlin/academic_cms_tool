# Academic CMS Tool
### *By - Michael Lin*
#### *Made with React.js, Node.js, Express, AWS RDS (Using MySQL), Semantic UI CSS*

## Registration
![Registration](https://imgur.com/wx0RTuy.gif)
###
*Registration password hash implemented with **bcrypt*** <br />
*Frontend/Backend **validation** enabled* <br />
*New user is created if validations pass* <br />
*New user information is passed to the **RESTful APIs through Axios*** <br />
*RESTful APIs are integrated with **Node.js** to connect with the **Amazon RDS using MySQL*** <br />

## Login
![Login](https://imgur.com/wXuGKlh.gif)
###
*Login password hash implemented with **bcrypt*** <br />
*Frontend/Backend validation enabled* <br />
*Checks to see if email exists, then verifies password with email* <br />
*Adds user into **local storage*** <br />

## Courses have Learning *Objectives*
![Demo1](https://imgur.com/KiZeNuO.gif)
###
*Dashboard consists of all **"Courses"** in DB* <br />
*Navigate to specific **"Languages"** & show details of each* <br />
*Navigating to a specific **"Course"** will list the Course's **"Objectives"*** <br />
*New **"Objectives"** can be created from there or current ones can be edited or deleted* <br />

## Learning *Objectives* have *Activities*
![Demo2](https://imgur.com/plSq5km.gif)
###
***Objectives** have **Activities** with types such as "Matching" or "Fill-In"* <br />
*New **Activities** can be created from there or current ones can be edited or deleted* <br />
*Breadcrumbs are implemented to create better navigation and UX*

