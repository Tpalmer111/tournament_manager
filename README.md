# tournament_manager
## app description
This is an app for managing a poker tournament. The user will be anyone who hosts a poker game, from small "kitchen table" home games to large multi-table tournaments. The app will display all the information a player needs to see during a game, while the host will be able to create tournament templates and adjust all the settings for each game type they want to play.
## tech stack
The foundation of this app will be built in javaScript and React. I plan to research and learn how to use Flutter to create a mobile app. For the backend I plan to use mongoose and mongoDb to manage the database.
## user flow
The user will be both the host and the player of a poker game. The flow will be different depending on the account type. Any user not logged in will be directed to the home page, which diplays two buttons: Host, and Player.
__The Host__: By clicking the "Host" button, a login page will load, with an input for a username and password, as well as a "Register" button that takes the user to the registration page. By completing either the login or the registration form, the user is taken to their "Tournament Home" page.
The Tournament Home page is where the host will see the Tournaments they have saved as well as a "New Tournament" button. Clicking the "New Tournament" button the user will be taken to the page that renders the new tournament form. This is where the user will create a new tournament to save to their profile. Once a tournament is saved the user is redirected to the Tournament home page. If the host selects one of the saved Tournaments they will be taken to the "Tourney" page.
On the "Tourney" page the Host will see all the tournament's information, the clock will be set to the default time, and any registered players will be listed. There will be an invite link the Host can copy and send to players they want to invite. Only the Host will able to see and click the start, pause, and restart buttons. Next to each players name, the host will see a button next to each player to eliminate them from the tournament when they have run out of chips. Lastly, the host will see a button allowing them to register for the tournament.
__The Player__: By clicking the "Player" button, a login page will load, with an input for a username and password, as well as a "Register Player" button that takes the player to a page that renders a player registration form. When the player logs in or registers an acount they are directed to a join Tournament page, that shows an input field for them to enter the invite information to get them into the host's game.
When a player has logged in and provided valid invite information they are directed to the player side of the "Tourney" page. On the "Tourney" page the user can see most of the same information the host can see but none of the ability to edit or change anything. When a player has been eliminated by the host, they will see a message telling them they have been eliminated and when the game is over it will display the Winner until the page is closed or reloaded.
## User stories
* As as user I want to be able to manage my poker tournament from one website or app.
* I would like to be able to adjust the settings for each game.
* Players should be able to sign in and view the game on their own devices.
## Daily sprints
* __Tuesday:__
    * set up the repo to be a react app
    * connect the user auth login and registration
    * research flutter
    * build the front end routes
* __Wednesday:__
    * connect the backend
    * set up the backend routes
    * set up and manage the database
* __Thursday:__
    * build timer fuctionality
    * set-up the default game format
* __Friday:__
    * create the new game form
* __Saturday:__
    * finalize funtionality for basic MVP
    * css styling
* __Sunday:__
    * css styling
## Pages
* Home page: where the user selects Player or Host.
* Host login page: where the host enters username and password.
* Player login page: where the player enters username, password, and invite code.
* Host registration page: where the host registers for a profile.
* Player registration page: where the player registers for a new username and password.
* Tournament home page: where the host picks a game to run, or navigates to the edit tourney page.
* New tourney page: where the host will create a new tournament format.
* The tourney page: where the host controls the tournament and the players can view the game clock and details.
## RESTful routing chart
| **Action** | **Route** | **Description** |
|--------|-------|-------------|
| GET    | / | show the home page |
| GET    | /host_login | show the host login page |
| PUSH   | /host_login | login the host |
| GET    | /player_login | show the player login page |
| PUSH   | /player_login | login the player |
| GET    | /host_registration | show the host registraion page |
| PUSH   | /host_registration | register a new host account |
| GET    | /player_registration | show the player registraion page |
| PUSH   | /player_registration | register a new player account |
| GET    | /tournament_home  | show the tournament home page |
| GET    | /create_tourney  | show the create tourney page |
| PUSH   | /create_tourney  | create a new tournament |
| PUT    | /edit_tourney    | edit an existing tournament |
| DELETE | /edit_tourney  | delete and existing tournament |
| GET    | /tourney | show tournament page |
## ERD chart
## Wire-frames