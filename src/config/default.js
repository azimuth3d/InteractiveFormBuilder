module.exports = {
  host: process.env.NODE_HOST || 'localhost', // Define your host from 'package.json'
  port: process.env.PORT,
  app: {
    htmlAttributes: { lang: 'en' },
    title: 'form1',
    titleTemplate: 'Interactive form builder - %s',
    meta: [
      {
        name: 'description',
        content: ' Another Google form  clone with react universal .',
      },
    ],
  },
};
