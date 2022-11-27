# Fluxus Fungus API

#### Development

Copy the `.env.local.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.example .env
```

Install dependencies and start the server
```bash
# Using npm
npm install
npm run develop
```

Strapi server is running at [http://localhost:1337](http://localhost:1337)

## Deployment
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/gutobenn/fluxusfungus-api)

Don't forget to disable registrations and set readonly permissions for the public!
