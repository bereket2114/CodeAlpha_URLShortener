# Linkly — URL Shortener

Linkly is a lightweight URL-shortening web app built with **Node.js, Express, EJS, and MongoDB**. It turns long destination URLs into compact links and redirects visitors to the original page.

The interface has been refreshed with a responsive dark theme, clearer form hierarchy, accessible focus states, a result panel, and one-click copying.

## Features

- Create short links for valid HTTP and HTTPS URLs.
- Redirect short codes to their original destinations.
- Store links and creation timestamps in MongoDB with Mongoose.
- Copy a generated short link with a clear success message.
- Responsive layout for desktop, tablet, and mobile.
- MVC-style separation of routes, controller logic, database configuration, model, and EJS view.
- Basic input validation and friendly error handling.

## Tech stack

- **Runtime:** Node.js
- **Server:** Express
- **Templates / UI:** EJS, HTML, CSS, vanilla JavaScript
- **Database:** MongoDB with Mongoose
- **Configuration:** dotenv

## Project structure

```text
CodeAlpha_URLShortener/
├── config/
│   ├── .env.example
│   └── DB_Connection.js
├── controller/
│   └── URL_Shortener_Controller.js
├── model/
│   └── urlSchema.js
├── public/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── app.js
├── route/
│   └── urlShortenerRoute.js
├── views/
│   └── index.ejs
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

## Run locally

### 1. Requirements

Install a supported version of Node.js and npm, and prepare a MongoDB database (local MongoDB or MongoDB Atlas).

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a file named `.env` inside the `config/` folder by copying `config/.env.example`.

```env
PORT=8000
DB_String=your_mongodb_connection_string
```

Replace the placeholder with your own MongoDB connection string. Keep your real `config/.env` private; never commit database credentials to GitHub.

### 4. Start the app

```bash
npm start
```

For development with automatic restarts:

```bash
npm run dev
```

Open [http://localhost:8000](http://localhost:8000).

## How it works

1. Enter a complete `https://` or `http://` destination URL.
2. Linkly validates the URL and generates a short code.
3. The original URL and code are saved in MongoDB.
4. The app displays the new link, which can be copied or opened.
5. When someone visits the short link, Express looks up the code and redirects to the original destination.

## Routes

| Method | Route | Purpose |
|---|---|---|
| `GET` | `/` | Render the shortener page and optional result |
| `POST` | `/api/shorten` | Validate and save a destination URL |
| `GET` | `/:code` | Resolve a short code and redirect |

## Before deploying

- Set `PORT` and `DB_String` in your hosting provider's environment settings.
- Restrict MongoDB network access and use a database user with appropriate permissions.
- Add rate limiting and abuse prevention before exposing the service publicly.
- Consider adding click analytics, link expiration, custom aliases, and automated tests as future improvements.

## Author

**Bereket Woldemariyam**

GitHub: [@bereket2114](https://github.com/bereket2114)

## Acknowledgment

Built as a URL Shortener project for the CodeAlpha internship.


### Short ID generation

This project uses **Nano ID** (`nanoid(6)`) to generate compact, URL-safe short codes. The generated code is stored with the original URL in MongoDB and used by the redirect route. The controller checks for an existing code before saving to reduce collision risk; the MongoDB unique index remains the final safeguard.
