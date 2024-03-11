# Simple pokedex
Simple pokedex where on the Home page users can go through all pokemons and check their details thanks to pokeapi.co, search for a specific one in the search bar and also mark them as favourite and see them listed on the Inventory page.

- [Built With](#built-with)
- [Install and Setup](#install-and-setup)
- [Future plans @ Known bugs](#future-plans-known-bugs)
- [Links](#links)


# Built With
- React.js + Typescript - frontend
- Node.js + Express.js - backend
- mongoDB or json-server - database
- insomnia, REST client - testing
- pokeapi.co
- bootstrap


# Install and Setup
1\. Clone the repository

2a. Open a terminal and step into the `server` folder, then run `npm i` to install the dependencies\
2b. Configure connection to mongoDB, please create a `.env` file in the `server` folder and add your connection string as `ATLAS_URI`. It should look similar to this: `ATLAS_URI='mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database-name>'` If you do not want to use mongoDB, you can also use `json-server` on the client-side\
2c. run `npm start` to start the server
  
3a. Open another terminal and step into `client` folder, then run `npm i` to install the dependencies\
3b. If you want to use `json-server`, please step into `client/src/services/inventory.ts` then uncomment the following lines `6, 39-55` and comment lines `7, 15-36`. Please note that releasing (deleting) a pokemon is not possible using json-server\
3c. start the "dummy server" using the command `npx json-server -w data/dummy_db.json -p 8081`\
3d. run `npm run dev` to start the react app

By now you should be able to see the Home page with some pokemon on `http://localhost:5173/` Hopefully!

# Future plans & Known bugs
Having not used MERN-stack in more than half a year I really felt the rustiness at the beginning, but despite the initial difficulties I greatly enjoyed working on the project and I plan on improving the code and adding/changing features such as:

- pagination looks good in Inventory, but I want the Home page with infinite scrolling
- search bar sends name to pokeapi.co then tries to retrieve a pokemon, I want to be able to filter every pokemon ever and maybe add filtering by type as well
- introducing user system, maybe team building
- immigrating to next.js and then deploying

## Bugs
- releasing/deleting pokemon is not possible using json-server
- flashes of default components when waiting for data
- aaand CSS... (I love Bootstrap, but it just has its own mind sometimes!)
