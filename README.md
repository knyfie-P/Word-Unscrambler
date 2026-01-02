# Word Unscrambler

A modern, sleek web application that unscrambles jumbled letters into valid English words. Designed with a beautiful "Glassmorphism" UI (Apple-style liquid glass effect) and powered by a high-performance Node.js backend.

## Features

-   **Instant Unscrambling:** Uses an optimized anagram map algorithm for near-instant results.
-   **Modern UI:** Glassmorphism design with a responsive layout.
-   **Dark/Light Mode:** Persists user preference via Local Storage.
-   **Large Dictionary:** Supports over 300,000 words.

## Tech Stack

-   **Frontend:** HTML5, CSS3, Vanilla JavaScript
-   **Backend:** Node.js, Express.js
-   **Data:** Local `dictionary.txt` file

## Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) (v14 or higher)
-   npm (comes with Node.js)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/knyfie-P/Word-Unscrambler.git
    cd Word-Unscrambler
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the server:
    ```bash
    node server.js
    ```
    The server will start at `http://localhost:3000`.

4.  Open the application:
    Open `index.html` in your web browser.

## Deployment

Since this application has a backend API (`server.js`) and a frontend (`index.html`), it requires a hosting provider that supports Node.js.

### Option 1: Render / Railway / Heroku (PaaS)

1.  Push your code to a GitHub repository.
2.  Connect your repository to a service like **Render**, **Railway**, or **Heroku**.
3.  Set the **Build Command** to: `npm install`
4.  Set the **Start Command** to: `node server.js`
5.  Your app will be live!

### Option 2: VPS (DigitalOcean, AWS, Linode)

1.  SSH into your server.
2.  Clone the repo and install dependencies.
3.  Use a process manager like **PM2** to keep the server running:
    ```bash
    npm install -g pm2
    pm2 start server.js --name "unscrambler"
    ```
4.  Configure Nginx or Apache to reverse proxy traffic to port 3000.

## License

ISC
