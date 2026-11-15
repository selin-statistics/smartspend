# SmartSpend

SmartSpend is a personal expense tracker web application that helps you record, review and understand your everyday spending. It is built with React and Vite, uses JavaScript for all application logic, and stores data in the browser's LocalStorage so your expenses remain available after you refresh or close the page.

The interface is written in Turkish and displays amounts in Turkish Lira (₺).

## Project Purpose

Many people lose track of small, frequent purchases until the end of the month. SmartSpend provides a simple, focused place to log each expense as it happens and to see, at a glance, how much has been spent in the current month and where the money went. The goal is a clean, distraction-free tool that works on both desktop and mobile without requiring an account or any setup.

## Main Features

- **Monthly dashboard:** shows the total spending for the current month and the number of transactions recorded in that month.
- **Expense form:** add an expense with a description, amount, date and category. Required fields are validated before saving, and the form shows Turkish error messages when something is missing or invalid.
- **Transaction table:** lists all expenses, sorted from newest to oldest, with date, description, category and amount.
- **Delete expenses:** remove any expense from the table after confirming the action.
- **Category filtering:** filter the transaction table by one category, or show all categories at once.
- **Monthly spending chart:** a bar chart of total spending for the last six months, with the current month highlighted.
- **Persistent data:** all expenses are saved in the browser and reloaded automatically the next time the app is opened.

## Technologies Used

- **React 18** for building the user interface with reusable components and hooks.
- **Vite** as the development server and build tool.
- **JavaScript (ES modules)** for all application code.
- **CSS** for layout, theming and responsive design. No CSS framework is used.
- **LocalStorage** (browser Web Storage API) for saving expense data on the device.
- **ESLint** for code quality checks.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or newer recommended)
- npm (installed with Node.js)

### Installation

1. Clone or download the project and open its folder in a terminal.
2. Install the project dependencies:

   ```bash
   npm install
   ```

### Running the Application

Start the development server:

```bash
npm run dev
```

Then open the local address shown in the terminal (by default `http://localhost:5173`) in your browser.

### Other Commands

| Command           | Purpose                                              |
| ----------------- | ---------------------------------------------------- |
| `npm run build`   | Creates an optimized production build in `dist/`     |
| `npm run preview` | Serves the production build locally for a final check |
| `npm run lint`    | Runs ESLint on the project source                    |

## Project Structure

```
src/
  components/   Dashboard, expense form, category filter, transaction table, monthly chart
  constants/    Expense category definitions
  hooks/        useExpenses hook that manages expenses and LocalStorage
  utils/        Date, currency and monthly statistics helpers
  App.jsx       Main layout and state wiring
  App.css       Component and responsive styles
  index.css     Global styles and color variables
```

## How LocalStorage Is Used

SmartSpend keeps all expense data in the browser's LocalStorage under a single key named `smartspend.expenses`.

- **Saving:** every time an expense is added or deleted, the complete list of expenses is written to LocalStorage as JSON.
- **Loading:** when the app starts, it reads that list back. If no data exists, or the stored data cannot be read, the app starts with an empty list instead of failing.
- **Scope:** the data belongs to the specific browser and device you use. Clearing the browser's site data, or using a different browser or device, will not show the same expenses.

No data is sent to a server.

## Responsive Design

The layout adapts to the width of the screen:

- **Desktop:** the summary cards sit side by side, and the expense form and monthly chart appear next to each other.
- **Tablet and smaller laptops:** the form and chart stack into a single column.
- **Mobile:** the summary cards and form fields stack vertically, and each transaction in the table is displayed as a compact card with labeled details and a delete button.

Colors, spacing and typography follow a consistent palette: cream background, sage green, dark green and beige accents.

## AI Tools Used During Development

SmartSpend was developed with the assistance of two AI tools:

- **ChatGPT** was used to plan the project, define the requirements, choose the technology stack, prepare the development prompts, and guide testing and documentation.
- **Bolt.new** was used to generate the React application, implement the features, create the responsive design, debug issues, and generate this README.
