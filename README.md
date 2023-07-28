# Recipe Box

## Getting Started

Install Dependencies
- Run `npm install` to install any dependencies

Start the Backend Server with JSON Server
- Run `json-server --watch db.json --port 3000`

Use localtunnel to expose the localhost url for expo to access the backend
- In a 2nd terminal, run `npx localtunnel --port 3000`
- Copy and paste the URL from that into the `App.js` fetch request with the `/recipes` trailing the URL

Start the Development with Expo
- In a 3rd terminal Run `npx expo start` to get started on development server
