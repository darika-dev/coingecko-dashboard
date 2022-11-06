# Crypto Exchanges Dashboard

Crypto Exchange Directory utilizing Typescript, Next js (React), Tailwind CSS and Coingecko API, tested using Cypress and Jest.

### Requirements

- Node.js 14+ and npm

### Getting started

Run the following command on your local environment:

```shell
npm install
```

Then, you can run locally in development mode with live reload:

```shell
npm run dev
```

Open http://localhost:3000 with your favorite browser to see your project.

```shell
.
├── README.md                       # README file
├── __mocks__                       # Mocks for testing
├── .github                         # GitHub folder
├── .husky                          # Husky configuration
├── .vscode                         # VSCode configuration
├── public                          # Public assets folder
├── src
│   ├── layouts                     # Layouts components
│   ├── pages                       # Next JS Pages
│   ├── pages.test                  # Next JS Pages tests (this avoid test to treated as a Next.js pages)
│   ├── styles                      # Styles folder
│   ├── templates                   # Default template
│   └── utils                       # Utility functions
├── tailwind.config.js              # Tailwind CSS configuration
└── tsconfig.json                   # TypeScript configuration
```

### Deploy to production

You can see the results locally in production mode with:

```shell
$ npm run build
$ npm run start
```

You can create an optimized production build with:

```shell
npm run build-prod
```

Now, your project is ready to be deployed. All generated files are located at `out` folder.

### Testing

All tests are colocated with the source code inside the same directory. So, it makes it easier to find them. Unfortunately, it is not possible with the `pages` folder which is used by Next.js for routing. So, what is why we have a `pages.test` folder to write tests from files located in `pages` folder.

### Deploy to Netlify

[![Netlify Deploy button](https://www.netlify.com/img/deploy/button.svg)]()
