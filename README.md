## Staring application

All you need to do is:

```
npm install
npm run dev
```

And to test the app:

```
npm run test
```

## Approach and design decisions

- Divide structure of the app into:
  - components - in every folder there is 2 files: one for component and one for styles
  - utils - utils values / functions
  - tests - test for some functionalities
  - styles - for global styles of app
  - machine - for xstate machine

Structure looks like this mostly cause of simplicity and readability, naming of files is self explanatory. And project is easy to scale up.

Interfaces of components are inside component file, cause they are small and its much faster to read them.

For styling every file is named '.styles.ts' because usually developers use this convention with style-components and it is easy to find.

Also every component is named 'Styled[x]' cause of convention

Using 'rem' values cause it's easy to divide with 'x4'
For props to styled components add '$' before prop
