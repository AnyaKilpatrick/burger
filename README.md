# Eat-Da-Burger
# Node Express Handlebars

A burger logger with MySQL, Node, Express, Handlebars and a homemade ORM. Be sure to follow the MVC design pattern; use Node and MySQL to query and route data in your app, and Handlebars to generate your HTML.

Heroku was used for hosting. And JawsDB was used as a remote database.
Deployed application [here](https://devourburger.herokuapp.com/)

* Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

* Whenever a user submits a burger's name, app will display the burger on the left side of the page.

* Each burger in the waiting area also has a `Devour` button. When the user clicks it, the burger will move to the right side of the page.

* App will store every burger in a database, whether devoured or not.


#### DB

 In the `db` folder a file named `schema.sql` contains SQL queries that do the following:

   * Create the `burgers_db`.
   * use the `burgers_db`.
   * Create a `burgers` table with these fields:
     * **id**: an auto incrementing int that serves as the primary key.
     * **burger_name**: a string.
     * **devoured**: a boolean.
     * **timestamp**: time and date when burger was added

`seeds.sql` contains insert queries to populate the `burgers` table with at least three entries.


#### Config

   * `connection.js` file contains the code to connect Node to JawsDB (remote db) and MySQL(local db).

   ```javascript
    // hooking project with JawsDB
    if(process.env.JAWSDB_URL){
        connection = mysql.createConnection(process.env.JAWSDB_URL);
    }else{
        // setting up MySQL CONNECTION
        connection = mysql.createConnection({
            host: "localhost",
            port: 3306,
            user: "root",
            password: process.env[2],
            database: "burgers_db"
        });
    }

    // making connection
    connection.connect(function(err){
        if(err) throw err;
        console.log("connected as id "+connection.threadId);
    })
   ```

   * `connection.js` is imported into `orm.js`

   * `orm.js` file contains the methods that will execute the necessary MySQL commands in the controllers. These are the methods that are used in order to retrieve and store data in the database.

     * `selectAll()`
     * `insertOne()`
     * `updateOne()`

#### Models

* `orm.js` imported into `burger.js`

* `burger.js` contains the code that will call the ORM functions using burger specific input for the ORM.


#### Controllers

* Express and `burger.js` are imported into `burgers_controller.js` file.

 `burgers_controllers.js` contains all the routes:

 ```javascript
//  get - displaying all data from db
 router.get("/", function(req, res){
    burger.selectAll(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject)
    })
});
// post - inserting new data into db
router.post("/api/burgers", function(req, res){
    console.log(req.body.name);
    burger.insertOne(req.body.name, function(result){
        console.log("new burger added");
        res.status(200).end();
    })
});
// put - updating db
router.put("/api/burgers/:id", function(req, res){
    var id = req.params.id;
    burger.updateOne(req.body.devoured, id, function(result){
        if(result.changedRows == 0){
            return res.status(404).end();
        }else{
            res.status(200).end();
        }
    })
})
 ```

