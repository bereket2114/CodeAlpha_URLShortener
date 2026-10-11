const urlModel = require('../model/urlSchema');

module.exports = {
  getMainPage: async (req, res) => {
    try {
      const { code } = req.query;
      const record = code ? await urlModel.findOne({ shortURL: code }) : null;
      return res.render('index', { record, origin: `${req.protocol}://${req.get('host')}` });
    } catch (err) {
      console.error('Unable to load the URL shortener:', err);
      return res.status(500).send('Something went wrong while loading the page.');
    }
  },

  getShortUrl: async (req, res) => {
    try {
      const record = await urlModel.findOne({ shortURL: req.params.code });
      if (!record) return res.status(404).send('This short link could not be found.');
      return res.redirect(record.originalURL);
    } catch (err) {
      console.error('Unable to resolve short URL:', err);
      return res.status(500).send('Unable to open this link right now.');
    }
  },

  postUrl: async (req, res) => {
    const originalUrl = typeof req.body.originalUrl === 'string' ? req.body.originalUrl.trim() : '';
    if (!originalUrl) {
      return res.status(400).send('Please enter a URL to shorten.');
    }

    let parsedUrl;
    try {
      parsedUrl = new URL(originalUrl);
      if (!['http:', 'https:'].includes(parsedUrl.protocol) || !parsedUrl.hostname) {
        throw new Error('Unsupported URL');
      }
    } catch (_) {
      return res.status(400).send('Please enter a valid URL beginning with http:// or https://.');
    }

    try {
      // Check for collisions so a generated code never overwrites an existing link.
      let shortCode;
      let exists = true;
      for (let attempt = 0; attempt < 5 && exists; attempt += 1) {
        const { nanoid } = await import('nanoid');
        shortCode = nanoid(6);
        exists = Boolean(await urlModel.exists({ shortURL: shortCode }));
      }
      if (exists) throw new Error('Could not generate a unique short code');

      await urlModel.create({ originalURL: parsedUrl.toString(), shortURL: shortCode });
      return res.redirect(`/?code=${encodeURIComponent(shortCode)}`);
    } catch (err) {
      console.error('Unable to create short URL:', err);
      return res.status(500).send('We could not create your short link. Please try again.');
    }
  }
};
