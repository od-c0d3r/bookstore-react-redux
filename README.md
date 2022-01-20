# BookstoreApp w/ React-Router-Redux

<img align="right" src="./public/logo.svg" style="width:400px;">

> Milestone 1 : Set up the environment and tools needed to develop a React/router/redux application.

> Milestone 2 : Configure the Redux Store and write actions and reducer for adding and removing books.

> Milestone 3 : Connect application to an existing API to create and remove books in a remote server and save a copy at localStorage for quick access.

> Milestone 4 : Add styling. will use Zeplin as a collaboration tool.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

## Built With

- JavaScript libraries : React, React-router, React-Redux

## Live Demo

- Served with Github pages : [Live](https://od-c0d3r.github.io/bookstore-react-redux/)

## App Tree

```markdown
src
├── api
│   ├── bookStoreAPI.js
│   └── localStorageAPI.js
├── components
│   ├── app
│   │   ├── App.js
│   │   └── App.scss
│   ├── bookCard
│   │   ├── BookCard.js
│   │   └── BookCard.scss
│   ├── bookForm
│   │   ├── BookForm.js
│   │   └── BookForm.scss
│   ├── books
│   │   ├── Books.js
│   │   └── Books.scss
│   ├── categories
│   │   ├── Categories.js
│   │   └── Categories.scss
│   └── header
│       ├── Header.js
│       └── Header.scss
├── redux
│   ├── books
│   │   └── booksReducer.js
│   ├── categories
│   │   └── categories.js
│   └── store.js
├── face.png
├── index.css
└── index.js
```

## Getting Started

To get a local copy up and running follow these simple example steps

- From your terminal enter in sequence 
  - `git clone https://github.com/od-c0d3r/bookstore-react-redux.git`
  - `code bookstore-react-redux`

### Available Scripts

In the project directory, you can run:

- #### `npm install`

  - Install the project dependencies.

- #### `npm start`

  - Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

  - The page will reload when you make changes.\
You may also see any lint errors in the console.

- #### `npm test`

  - Launches the test runner in the interactive watch mode. 
  - Coming Soon

- #### `npm run build`

  - Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

  - The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Coders

👤 **Omar R.**

- Github: [@od-c0d3r](https://github.com/od-c0d3r)
- LinkedIn: [omarrashad](https://linkedin.com/in/omarrashad)

## Acknowledgements 

- Thanks to [kevinsqi/react-circular-progressbar](https://github.com/kevinsqi/react-circular-progressbar/blob/HEAD/README.md) for using their Progress bar react component.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!

## 📝 License

This project is MIT licensed.

## To do :

- [ ] Implement Categories in app, users can select category while adding a book.
- [ ] Add `completed` property in book object.
- [ ] Add animation for adding and removing cards, and spnning the progress bar.
