#                  BOT BATTLR

 Welcome to Bot Battlr, the one and only spot in the known universe where you can custom build your own Bot Army! This application allows users to browse through a list of robots, view details, and enlist bots into their army.

# Prerequisites
Node.js and npm installed on your machine.
JSON Server for the backend.
Steps
## Clone the repository:

bash
Copy code
git clone git@github.com:phillipmdicullar/bott-battlr.git
cd Bot-Battlr
## Install dependencies:

bash
Copy code
npm install

## Start JSON Server:

bash
Copy code
json-server --watch db.json

## Start the React app:

bash
Copy code
npm start
## Open your browser and navigate to:

Copy code
http://localhost:3001/
# Usage
## Once the app is running, you can:

1. Browse through the list of bots in the BotCollection.
2. Add bots to your army by clicking on them.
3 .Remove bots from your army or discharge them permanently.
Features
4. View Bot Collection: Displays all available bots in a grid format.
5. Enlist Bots: Add bots to your army with a single click.
6. Release Bots: Remove bots from your army.
7. Discharge Bots: Permanently delete bots from the server and the army.
## API Endpoints
GET /bots: Retrieve the list of all available bots.

## Example Response:

json
Copy code
[
  {
    "id": 101,
    "name": "wHz-93",
    ...
  },
  ...
]
DELETE /bots/:id: Delete a bot by its ID.

# Contributing
Contributions are welcome! If you have suggestions or encounter issues, feel free to open a pull request or an issue on the repository.

## Steps for Contributing:
1. Fork the repository.
2. Create a new branch: git checkout -b my-feature.
3. Make your changes and commit them: git commit -m 'Add new feature'.
4. Push to the branch: git push origin my-feature.
5. Submit a pull request.
## License
This project is licensed under the MIT License.