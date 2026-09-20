<div align="center">

<img src="./src/assets/logo-text.png" alt="Dev Stack Logo" width="110" />

# Dev Stack Builder

### 🚀 Explore Technologies • Build Your Ideal Stack

A simple and responsive website where developers can explore technologies and build their own development stack.

<br/>

### 🌐 Live Website

[![Visit Now](https://img.shields.io/badge/Visit_Now-EC4899?style=for-the-badge&logo=googlechrome&logoColor=white)](https://mijanurdev.github.io/Dev-Stack/)

<br/>

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/mijanurdev)
[![Source Code](https://img.shields.io/badge/Source_Code-6366F1?style=for-the-badge&logo=github&logoColor=white)](https://github.com/mijanurdev/Dev-Stack)

<br/>

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)

</div>

---

## 📖 About the Project

**Dev Stack Builder** is a responsive web application that helps developers explore different technologies and create their own technology stack.

Users can explore 12 technologies from different categories, such as Frontend, Backend, Database, Language, Styling, and DevOps.

Each technology card shows an icon, name, description, category, difficulty level, rating, and badge.

Users can add technologies to their stack, remove individual items, and clear the entire stack.

I built this project using React, TypeScript, Vite, Tailwind CSS, and DaisyUI.

---

## 🛠️ Technologies Used

| Technology | Purpose |
| :--- | :--- |
| ⚛️ React | Building UI components |
| 🔷 TypeScript | Writing type-safe code |
| ⚡ Vite | Development and build tool |
| 🎨 Tailwind CSS | Styling and responsive design |
| 🌼 DaisyUI | UI components |
| 🔔 React Toastify | Showing notifications |
| 🧩 React Icons | Adding icons |
| 📦 JSON | Storing technology data |

---

## ✨ Three Key Features

### 🔍 1. Explore Technologies

Users can explore 12 different technologies loaded from a local JSON file.

Each technology card includes:

- Technology icon and name.
- Description and category.
- Difficulty level.
- Rating and badge.
- Add to Stack button.

The cards are displayed in a responsive grid:

- Desktop: 3 columns.
- Tablet: 2 columns.
- Mobile: 1 column.

---

### 🧰 2. Build and Manage Your Stack

Users can create their own development stack by selecting technologies.

Main functionalities:

- Add technologies to the stack.
- View selected technologies in the sidebar.
- See the total number of selected items.
- Prevent duplicate selections.
- Disable the button after adding a technology.
- Remove individual technologies.
- Remove all technologies at once.

The stack updates automatically using React state.

---

### 📱 3. Responsive Design and Interactive Features

The website works on desktop, tablet, and mobile devices.

It includes:

- Responsive navigation menu.
- Loading spinner while fetching JSON data.
- Error handling.
- React Toastify notifications.
- Dynamic stack updates.
- Orange, pink, and violet gradient theme.

---

## 🔗 Project Links

<div align="center">

### 🌍 Explore My Project

[![Visit Now](https://img.shields.io/badge/Visit_Now-EC4899?style=for-the-badge&logo=googlechrome&logoColor=white)](https://mijanurdev.github.io/Dev-Stack/)

[![GitHub](https://img.shields.io/badge/GitHub_Profile-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/mijanurdev)

[![Source Code](https://img.shields.io/badge/Source_Code-6366F1?style=for-the-badge&logo=github&logoColor=white)](https://github.com/mijanurdev/Dev-Stack)

</div>

---

## 🚀 How to Run Locally

Follow these simple steps to run the project.

### Step 1: Clone the Repository

```bash
git clone https://github.com/mijanurdev/Dev-Stack.git
```

### Step 2: Open the Project Folder

```bash
cd Dev-Stack
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Start the Project

```bash
npm run dev
```

Open the local URL shown in your terminal.

Usually:

http://localhost:5173/

### Step 5: Build the Project

```bash
npm run build
```

### Step 6: Preview the Build

```bash
npm run preview
```

---

# ❓ React Questions and Answers

### 1. What is JSX, and why is it used in React?

JSX lets us write HTML-like code inside JavaScript.

It makes React code easier to write and understand.

I used JSX in my components to create the website.

---

### 2. What is the difference between props and state?

Props are used to send data from a parent component to a child.

State stores data that can change.

For example, I used props to pass technology data and state to manage my selected stack.

---

### 3. What does the useState hook do, and where did you use it in this project?

`useState` helps us store and update data in React.

I used it to store technology data, selected items, loading, and error messages.

When the state changes, React updates the website.

---

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

`useEffect` helps us run code when a component loads or when its dependencies change.

I used it to fetch technology data from the JSON file when my website loads.

After getting the data, I stored it in state.

---

### 5. Why does every item in a .map() list need a unique key prop?

A unique key helps React identify each item in a list.

It helps React update the correct item when the list changes.

I used the technology ID as the key.

---

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different content based on a condition.

In my project, when the stack is empty, I show an empty message.

When I add technologies, the selected items are displayed.

---

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

We pass data from parent to child using props.

The child can send information back by calling a function received through props.

In my project, I pass an Add function to the child. When the Add button is clicked, the function updates the stack in the parent.