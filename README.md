# Focus Flow 🚀

## 🚀 Live Demo

👉 [Focus Flow on GitHub Pages](https://r1derpush.github.io/react-project/)

**Focus Flow** is a productivity web application that helps users organize tasks, track progress, and stay focused using a Focus Mode inspired by the Pomodoro technique ⏱️.

---

## Features 🌟

- 📝 User registration with name, surname, and avatar selection.
- 📌 Task creation with optional descriptions.
- ✅ Task management: focus, finish, and remove tasks.
- 🎯 Focus Mode: a distraction-free interface for working on a selected task.
- 📊 Progress tracking with completed tasks counter.
- 💾 Persisting data in `localStorage` for tasks, descriptions, and user info.
- ✨ Smooth animations with Framer Motion.
- 📱 Responsive design for various screen sizes.

---

## Components Overview 🧩

### `Register` 👤

- Handles user profile setup (name, surname, avatar).
- Allows skipping registration.
- Stores user info in `localStorage`.

### `ProgressBar` 📊

- Displays a motivational message: _"Focus. Flow. Grow."_ 💪
- Wraps the `FocusMode` component.
- Changes style depending on whether Focus Mode is active.

### `FocusMode` 🔥

- Activated when a user chooses to focus on a task.
- Manages current task and task completion within Focus Mode.

### `UserDescriptionOfTask` ✏️

- Allows users to add a task with a description.
- Animated input form using Framer Motion.
- Saves tasks and descriptions to `localStorage`.

### `UserTask` 🗂️

- Displays a single task and its description.
- Buttons to Focus, Finish, or Remove the task.
- Updates completed task count and stores finished tasks in `localStorage`.

### `MainContent` 🏠

- Renders main task dashboard after registration.

---

## Technologies 💻

- **React** ⚛️ – Component-based UI.
- **React Hooks** 🪝 – `useState`, `useEffect` for state and lifecycle management.
- **React Router (HashRouter)** 🌐
- **Framer Motion** 🎬 – Animations for task inputs and UI transitions.
- **CSS3 / Flexbox** 🎨 – Styling and layout.
- **LocalStorage** 💾 – Persisting user and task data.
- **Images & Icons** 🖼️ – Custom avatars and UI icons.

---

## Installation ⚙️

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/focus-flow.git
   ```
2. Navigate to the project folder:

   ```bash

   cd focus-flow
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```
5. Open http://localhost:3000 in your browser 🌐.

## Usage 🎯##

- **Open the app and register by filling in your name, surname, and choosing an avatar (or skip registration 😉)**

- **Create tasks with optional descriptions 📝.**

- **Use the Focus button to enter Focus Mode for a specific task 🔥.**

- **Mark tasks as finished ✅ or remove them 🗑️.**

- **Completed tasks are tracked and stored automatically 📊.**
