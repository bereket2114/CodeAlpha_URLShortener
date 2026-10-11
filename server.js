const express = require('express');
const path = require('path');
const connectDB = require('./config/DB_Connection');
const mainRoute = require('./route/urlShortenerRoute');

require('dotenv').config({ path: path.join(__dirname, 'config', '.env') });

const app = express();
const PORT = process.env.PORT || 8000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(express.json({ limit: '10kb' }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', mainRoute);

app.use((req, res) => res.status(404).send('Page not found. Check the link and try again.'));
app.use((err, req, res, next) => {
  console.error('Unexpected application error:', err);
  if (res.headersSent) return next(err);
  return res.status(500).send('An unexpected error occurred. Please try again.');
});

async function startServer() {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Linkly is running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Application could not start:', error.message);
    process.exit(1);
  }
}

startServer();
