# Academic work: Blog Customizer

In this project, we implemented the customization of a blog page through an opening sidebar panel.

The main goal of the project is to practice using the React framework with Storybook.

## Technologies

List the main technologies and tools used in the project:

- SCSS, JavaScript, TS, HTML
- React
- Stylelint, Husky, Storybook, Webpack

## Изучаем имеющиеся компоненты

[Figma](https://www.figma.com/file/FEeiiGLOsE7ktXbPpBxYoD/Custom-dropdown?type=design&node-id=0%3A1&mode=design&t=eXRJnWC6Xsuw0qR4-1)

To run the project, execute:

```
npm run start
```

To launch Storybook, execute:

```
npm run storybook
```

To run the style linter, execute:

```
npm run stylelint
```

To run the linter, execute:

```
npm run lint
```

To run the formatter, execute:

```
npm run format
```

### Functional Requirements:

When clicking the "arrow", a settings sidebar opens; clicking it again or clicking outside closes the sidebar.

When changing settings in the sidebar, they are not applied immediately.

After clicking "apply", the styles are applied to the article.

When clicking "reset", the form settings revert to the initial ones that were present when the page was first opened, and the styles are applied to the article.

### Ensuring Data Transfer Between the Form and the Page

Implemented separate state management for the page and the form. The new state is applied after clicking "apply".

This was done using CSS variables, which are set globally at the application level in the App component, and based on which the styling is built.
