Sure! Here's the full **React 19 + Vite Setup Guide** in **Markdown format (`.md`)**:

---

````md
# ⚙️ React 19 Setup with Vite – Step-by-Step Guide

---

## ✅ Install Node.js

1. Go to [https://nodejs.org](https://nodejs.org)
2. Download the **LTS (Long Term Support)** version.
3. Complete the installation using the default settings.

### ✅ Verify Installation

Open your terminal and run:

```bash
node -v
npm -v
````

You should see the version numbers of Node and npm, confirming the installation was successful.

---

## 🛠️ Install Visual Studio Code (VS Code)

1. Go to [https://code.visualstudio.com](https://code.visualstudio.com)
2. Download and install **VS Code**.
3. This will be your main editor for writing React code.

---

## ⚡ Why Use Vite Instead of CRA?

* ⚡ **Super Fast** – Lightning-fast development server
* 🧼 **Cleaner** – Minimal boilerplate and fast builds
* 📦 **Built-in Support** – TypeScript, CSS Modules, PostCSS, and more
* 📘 **Recommended** by React 19 documentation
* 🔁 **Fast Refresh** support for instant changes

---

## 🚀 Create a New React App Using Vite

Visit [https://vite.dev](https://vite.dev) for more about Vite.

### ✅ Install Vite via Terminal

```bash
npm create vite@latest
```

Follow the prompts:

* **Project name** – Enter your project folder name (e.g., `react-vite-app`)
* **Select framework** – Choose `React`
* **Select variant** – Choose `JavaScript`
* Hit `Enter`

---

## 📂 Install Node Modules

Once Vite scaffolds your app, install all necessary packages:

```bash
cd react-vite-app
npm install
```

---

## 🧠 Open Project in VS Code

Open the project in VS Code by running:

```bash
code .
```

This opens the current folder in the editor.

---

## ▶️ Run the React App

Start the development server using:

```bash
npm run dev
```

The app will run at:

```
http://localhost:5173
```

Open the link in your browser to view your running React app.

---

## ✅ Test It Works

Go to:

```
src/App.jsx
```

Replace the contents with:

```jsx
function App() {
  return (
    <>
      <h1>Code With Thatraghavarora</h1>
      <h1>Hello React 19</h1>
    </>
  );
}

export default App;
```

Save the file and refresh your browser — you should see your new message!

---

## 🎉 You’re All Set!

You’ve now created a blazing-fast React 19 app with Vite!

---

## 📌 Next Steps

* Learn JSX
* Create reusable components
* Explore hooks like `useState` and `useEffect`
* Build a small project like a Todo App or Weather App

