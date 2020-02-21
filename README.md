Create long lasting memories of each burger youve eaten and become a little bit like ron swanson with this miracle of an app. 

--to run a local copy--
npm i;
run schema.sql;
update username/pass in orm/orm.js;
node server.js;
nav to localhost:3001;


A get req to home shows you the user interface and populates the list of burgers. 

Creating a burger creates an insert request to a mysql database. Burgers are never devoured at the same time they are created, so devoured defaults to false. 

You can then devour a burger by pressing the button. This sends an update request and sets devoured to true, which in turn moves the burger over to the devoured column. You cannot un-devour a burger (why would you try?) but you can always create another(yea!)

All options respond with the complete database after changes. Your burger list is always current (and who doesn't want a current burger list) 

Just as a side note, this project should have been about tacos. Come on, its 2020, we're eating tacos now



