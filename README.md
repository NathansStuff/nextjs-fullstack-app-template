# Introduction

This tutorial is not meant to replace the official documentation, of anything. It is meant to be a overview of what technologies and elements this applicaton uses, as well as a brief design practise document. It will also give some examples where appropriate.

If you are not familiar with anything this project uses, you should read the official documentation.

There is a lot of opinionated and strict configurations. This is by design. If there is not strict standards, there will be multiple implementations of something. Consistency across the whole team is the goal. However, this does not mean that the chosen standards are the right ones and they should be modified accordingly in response to changes in the team's preferences and industry standards.

## Basic Setup

This is a NextJS project. You can run `npm install` and `npm run dev` to see it available on [http://localhost:3000](http://localhost:3000)

Also recommended to run

```
npm run build
```

To ensure you can successfully do a production build of the project. It's recommended (but not required) to close your dev server when running a Next.js build. Most of the time there is no issue but occasionally the build can put your dev server in a weird state that requires a restart.

You should get a nice little report on the command line of all the pages built with green coloured text implying they are small and efficient. We'll try to keep them that way as we develop the project.

## Engine Locking

We would like for all developers working on this project to use the same Node engine and package manager we are using. To do that we use:

- `.nvmrc` - Will tell other uses of the project which version of Node is used
- `.npmrc` - Will tell other users of the project which package manager is used

We are using `Node v16 Fermium` and `npm` for this project and these values are enforced like so:

`.nvmrc`

```.nvmrc
lts/Gallium
```

`.npmrc`

```
engine-strict=true
```

You can check your version of Node with `node --version` and make sure you are setting the correct one. A list of Node version codenames can be found [here](https://github.com/nodejs/Release/blob/main/CODENAMES.md)

Note that the use of `engine-strict` didn't specifically say anything about `npm`, we do that in `package.json`:

`package.json`

```json
  "engines": {
    "node": ">=16.0.0",
    "yarn": "please use npm",
    "npm": ">=8.19"
  },
  ...
```

## Code Formatting and Quality Tools

In order to set a standard that will be used by all contributors to the project to keep the code style consistent and basic best practices followed we will be implementing two tools:

- [eslint](https://eslint.org/) - For best practices on coding standards
- [prettier](https://prettier.io/) - For automatic formatting of code files

I highly recommend using the vscode prettier extension.

Eslint can be run with `npm run lint` and it will automatically fix what it can (mainly semicolons, imports, spaces, etc) with the command `npm run lint-fix`

Prettier will automaticaally format the files for us. Note that the rules are defined in `.prettierrc` and certain files are ignored in `.prettierignore`. You can run prettier with the command `npm run prettier` or you can configure vscode to run the formatter on save.

## VS Code Configuration

There is some custom vscode settings setup in the `.vscode` folder so that we can take advantage of our ESLint and Prettier resources.

The reason we want to place them in a folder for the project is that we can set specific settings that only apply to this project, and we can share them with the rest of our team by including them in the code repository.

With these rules we tell VS Code to use the Prettier extension as the default formatter and to automatically format your files and organize your import statements every time you save.

We no longer need to think about that so we can focus on the important things like solving business problems.

## Debugging

Inside of your `.vscode` directory the `launch.json` file allows us to set up a convenient environment for debugging our application in case we run into any issues during development.

You can also click the little "bug & play icon" on the left of VS Code or press `Ctrl + Shift + D` to access the debugging menu. You can select which script you want to run and start/stop it with the start/stop buttons.

![VS Code Debugger](https://res.cloudinary.com/dqse2txyi/image/upload/v1649168143/blogs/nextjs-fullstack-app-template/vscode-debugger_x1puqk.png)

## Git Hooks

As we want this project to be as rock solid as possible since we're going to be building on it in the long term, particularly with a team of other developers, we have implemented a tool called [Husky](https://typicode.github.io/husky/#/)

Husky is a tool for running scripts at different stages of the git process, for example add, commit, push, etc. We set certain conditions, and only allow things like commit and push to succeed if our code meets those conditions, presuming that it indicates our project is of acceptable quality.

Husky is setup to automatically install itself with the application.

The hooks are:

- pre-commit: `npm run lint`
- pre-push: `npm run build` and `npm run test`
- commit-message: uses commitlint (below)

### Commitlint

We will be using a modified version of [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) standard and specifically the Angular convention [described here](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#type)

The reason being like many other features in this project to simply set a **consistent** standard for all developers to use to minimize train-up time when contributing to the project. I personally have very little concern as to what standard is chosen, as long as everyone agrees to follow it that is the most important thing.

Consistency is everything!

The modified version we are using is setting the JIRA task code at the front of the commit message.

##### Format

```
<type>: <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier to read on github as well as in various git tools.

A commit message consists of a header, a body and a footer, separated by a blank line.

##### Revert

If the commit reverts a previous commit, its header should begin with `revert: `, followed by the header of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

##### Message Header

The message header is a single line that contains succinct description of the change containing a type and a subject.

##### Message Type

```
// build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
// ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
// docs: Documentation only changes
// feat: A new feature
// fix: A bug fix
// perf: A code change that improves performance
// refactor: A code change that neither fixes a bug nor adds a feature
// style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
// test: Adding missing tests or correcting existing tests
```

###### Message Text

This is a very short description of the change.

- use imperative, present tense: “change” not “changed” nor “changes”
- don't capitalize first letter
- no dot (.) at the end

###### Message body

- just as in <subject> use imperative, present tense: “change” not “changed” nor “changes”
- includes motivation for the change and contrasts with previous behavior

## Directory Structure

This is a NextJS project and will follow the conventions.

- `pages` - Will be the actual routes/pages as per the required Next.js structure
- `src` - Will contain all the other folders and files
- `src/components` - The individual UI components that make up the app will live in here
- `src/features` - Features including things like authentication and logic
- `src/lib` - Contains facades for external libraries, eg custom axios hooks
- `src/services` - All code for interfacing with an external API
- `src/utils` - Straightforward utility functions eg formatters.
- `src/data` - Storage of asset data. Eg, JSON files (themes, items, etc) and global constants
- `src/context` - Global context (including state management)
- `src/types` - Global types
- `public` - The normal public folder
- `.storybook` - For storybook, setup, config, etc.
- `.husky` - For husky, setup, config, etc.
- `.vscode` - Will tell other users of the project which vscode settings to apply
- `styles` - The base styles including setup for TailwindCSS

Within `components` we will have subdirectories that kind of group similar types of components together. You can use any method you prefer to do this. For example inputs, surfaces, navigation, utils, layout etc.

## Storybook

[Storybook](https://storybook.js.org/).

Storybook gives us an environment to show off and test the React components we are building outside of the application we are using them in. It's great tool to connect developers with designers and be able to verify components we have developed look and function as per design requirements in an isolated environment without the overhead of the rest of the app.

Note that Storybook is meant as a visual testing tool, we must use other tools later for functional unit testing and end-to-end testing.

With `npm storybook` you will be able to access it on [http://localhost:6006](http://localhost:6006)

## Creating a Component Template

Note that `src/components/templates/base` has a basic component example setup there with the component, storybook, tests and mocks.

With each component we create we're going to want a very quick and easy way to test it in different environments (Storybook for example, but also the app, and maybe our unit tests). It will be handy to have quick access to data to render the component, which is why we have the mocks. If we weren't using tailwindcss for styling, we might also have a styles.module.css file here also.

## TailwindCSS

We are using TailwindCSS for styling. I suggest reading the official documentation. Note that you can change the conventions in the `tailwind.config` file. You can also create your own classNames with styling in the `pages/global.css` file. For example,

```
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .btn-primary {
    @apply border-0 p-2 px-6 bg-slate-100 rounded-md;
  }
}
```

## Module Path Aliases & Importing Components

This project is setup so that we can import from `@components` instead of a relative path like `../../`

It's also setup to disallow imports from nested structures.

```
// Bad
import Button from '../../components/Button'
import {Button} from '@components/Button'

// Good
import {Button} from '@components'
```

This is done via a combination of setup in `tsconfig.json` and `eslintrc.json` configurations.

```
// tsconfig.json
 "baseUrl": "./",
    "paths": {
      "@components/*": ["src/components/*", "src/components/templates/*"],
    }

// eslintrc.json
  "rules": {
    "no-restricted-imports": ["error", { "patterns": ["@components/*/*"] }],

```

This setup allows for imports from `@components/Templates`. As the project expands, if it makes sense to add more directories eg layouts, then this can be modified. Remember that this will require you to configure jest to resolve these import paths as well (discussed later).

It is important to note that this is accomplished via `src/components/templates/base/index.ts` exporting the component in `src/components/templates/base/BaseTemplates.tsx`

```
// index.ts
export * from './BaseTemplates';
```

This allows for `src/components/templates/index.ts` to `export * from './base';` allowing us to eventually import the component from `@components/templates`

Note that while this could have been achieved by removing the `base/index.ts` file entirely and having the `templates.ts` file look like `import * from './base/BaseTemplates/BaseTemplates` for design sake the chosen structure is to have the extra index.ts file and save the repeated folder/file naming pattern.
## Testing and Coverage

You must have 100% test coverage before pushing. This is to ensure that everything works as expected. Tests will run automatically before pushing and can be run with the command `npm run test` while coverage can be run with `npm run coverage`

Because this project is setup with module path aliases, we have to configure jest to be able to resolve these imports by matching the paths option in the jsconfig.json file with the moduleNameMapper option in the jest.config.js file.

This is setup initially but will have to be addressed if you add to this (eg, layouts).

```
// tsconfig.json or jsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/components/*": ["components/*"]
    }
  }
}
```

```
// jest.config.js
moduleNameMapper: {
  '^@/components/(.*)$': '<rootDir>/components/$1',
}
```

## Recommend VSExtensions

PostCSS Language Support - will remove the warning error for the `styles/globals.css` file for the `@tailwind` class
