# Nextra Blog

Simple and lean Nextra blog static template you can build upon.
Output directory set to `export` and build command to `npm install && npm run build`.

## 🚀 Project Structure

Inside of your Nextra project you'll see the following folders and files:

```
/
├── pages/
│   ├── posts/
│   │   └── post.mdx
│   ├── _app.tsx
│   ├── index.tsx
│   └── _document.tsx
├── public/
│   └── favicon.svg
├── styles/
└── package.json
```

### Extra features

- **Continuous Integration (CI):** `fleek sites ci` [Documentation.](https://docs.fleek.xyz/services/sites/#continuous-integration-ci)
- **Adding custom domains:** `fleek domains create` [Documentation.](https://docs.fleek.xyz/services/domains/)

### Keep in mind:

This template has been configured to produce a static output.

```js
// next.config.js

module.exports = {
  ...withNextra(),
  output: 'export',
  ...
};
```

You can find more information about static exports in [Next Documentation](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports).
