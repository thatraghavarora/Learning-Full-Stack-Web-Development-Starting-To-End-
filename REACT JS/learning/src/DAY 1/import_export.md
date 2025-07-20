

````md
# 🔁 Import and Export in React JS – Complete Guide

---

## 🧠 What is `export` and `import`?

In **JavaScript ES6**, `export` and `import` are used to **share and reuse code** across different files.

In a React project, you will often create multiple components and need to use one component inside another. To make that work:
- Use `export` to make components or variables available to other files.
- Use `import` to bring them into the current file.

---

## ⚡ Why Use Export/Import in React?

- To **break the app into reusable components**
- To **keep code modular, organized, and readable**
- To **avoid writing everything in a single file**

> 🧱 React is component-based. That means everything should be written in separate, reusable components — and these components must be exported and imported to be used elsewhere.

---

## 🧩 Types of Export/Import

React supports **two types** of exports:

### 1. ✅ Default Export
### 2. 🔷 Named Export

---

## ✅ 1. Default Export

You can **export only one value** as default from a file.

### 🔧 Syntax (Exporting)

```js
export default ComponentName;
````

or

```js
export default function ComponentName() {
  return <h1>Hello</h1>;
}
```

### 📥 Syntax (Importing)

```js
import ComponentName from './ComponentFile';
```

> ✅ No curly braces `{}` needed when importing a default export.

---

### 📌 Example: Default Export

**📁 UserComponent.jsx**

```jsx
function Login() {
  return <h1>Login Page</h1>;
}

export default Login;
```

**📁 App.jsx**

```jsx
import Login from './UserComponent';

function App() {
  return (
    <div>
      <Login />
    </div>
  );
}

export default App;
```

---

## 🔷 2. Named Export

You can **export multiple things** from a file using named exports.

### 🔧 Syntax (Exporting)

```js
export const name = 'John';
export function Profile() { return <h1>Profile</h1>; }
export function Settings() { return <h1>Settings</h1>; }
```

or export all at once:

```js
const name = 'John';
function Profile() { return <h1>Profile</h1>;  }
function Settings() { return <h1>Settings</h1>; }

export { name, Profile, Settings };
```

### 📥 Syntax (Importing)

```js
import { name, Profile, Settings } from './UserComponent';
```

> 🔷 You **must use curly braces `{}`** and **match the exact exported name**.

---

## ♻️ Using Both Default and Named Exports in One File

### 📁 UserComponent.jsx

```js
function Login() {
  return <h1>Login Page</h1>;
}

export function Profile() {
  return <h1>Profile</h1>;
}

export function Settings() {
  return <h1>Settings</h1>;
}

export default Login;
```

### 📁 App.jsx

```jsx
import Login, { Profile, Settings } from './UserComponent';

function App() {
  return (
    <div>
      <Login />
      <Profile />
      <Settings />
    </div>
  );
}

export default App;
```

---

## 🌐 Exporting Variables & Constants

You can export and import not only components but also constants, functions, arrays, and objects.

### 📁 config.js

```js
export const API_KEY = 'ABC123';
export const BASE_URL = 'https://example.com/api';
```

### 📁 App.jsx

```js
import { API_KEY, BASE_URL } from './config';

console.log(API_KEY, BASE_URL);
```

---

## 🧠 Key Rules & Best Practices

| Rule                                                                                     | Explanation |
| ---------------------------------------------------------------------------------------- | ----------- |
| ✅ Use default export for **single component per file**                                   |             |
| ✅ Use named exports for **utility functions, constants, or multiple items**              |             |
| ⚠️ Don't use both default and named exports **too often** in the same file unless needed |             |
| 📁 Use `.jsx` extension for components, `.js` for config or utilities                    |             |
| 🚫 Don't export/import inside function bodies — keep them at the top level               |             |

---

## ❓ What Happens Behind the Scenes?

* When you `export`, you're making variables/functions available to be used in **other modules**.
* When you `import`, you're referencing **the exported content** from a module/file.

React (via Webpack or Vite) **bundles all imports/exports together** into a single optimized build for the browser.

---

## 🔍 Common Errors

| Error                                         | Cause                                                                     |
| --------------------------------------------- | ------------------------------------------------------------------------- |
| `Attempted import error: 'X' is not exported` | You used the wrong name or didn't export it correctly                     |
| `Unexpected token export`                     | Trying to use `export` in non-module environments (e.g., older JS setups) |
| `Cannot find module './Component'`            | File path or file name is incorrect or extension is missing               |

---

## 🧠 Summary

| Feature          | Default Export                 | Named Export                                 |
| ---------------- | ------------------------------ | -------------------------------------------- |
| Export Syntax    | `export default Component`     | `export const Component` / `export function` |
| Import Syntax    | `import Component from 'file'` | `import { Component } from 'file'`           |
| Number per file  | Only **one default**           | Can be **many named**                        |
| Curly Braces     | ❌ No                           | ✅ Yes                                        |
| Rename on import | ✅ Yes (`import X from ...`)    | ✅ Yes (`import { X as Y }`)                  |

---

