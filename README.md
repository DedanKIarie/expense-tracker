# Expense Tracker

This is a simple React app built for a school code challenge. It lets you keep track of your expenses. You can add new expenses, search through them, sort them, and delete them if needed.

I used React components, state, and props to build this. It was good practice for handling forms, events, and filtering data.

---

## Features

- Add a new expense with a description, category, and amount  
- View all added expenses in a table  
- Filter expenses using a search bar  
- Sort expenses by description or category  
- Delete individual expenses  

---

## How to Run the App

Follow these steps to run it on your local machine:

### 1. Clone the repository

If this project is on GitHub, you can clone it using:

```bash
git clone https://github.com/DedanKIarie/expense-tracker
```

Then navigate into the project folder:

```bash
cd expense-tracker
```

### 2. Install dependencies

Make sure you have Node.js and npm installed.

Then run:

```bash
npm install
```

### 3. Start the development server

```bash
npm start
```

This will start the app on [http://localhost:3000](http://localhost:3000) or another port, depending on what's available.

---

## Folder Structure

The project is organized like this:

```
src/
├── components/
│   ├── ExpenseForm.js      // Form to add new expenses
│   ├── ExpenseTable.js     // Table displaying all expenses
│   └── SearchBar.js        // Search bar for filtering
├── App.js                  // Main component
└── index.css               // Styles for the app
```

---

## Notes

This project does not save data permanently. When you refresh the page, expenses will be lost. This was done intentionally since the focus is on front-end functionality only.