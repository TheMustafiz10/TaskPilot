# TaskManager (React)

TaskManager is a simple, responsive task viewer built with React, Vite, and Tailwind CSS. It fetches tasks from JSONPlaceholder and provides search, pagination, and detail views with light/dark theme support.

## Features

- Browse tasks with pagination (20 per page)
- Search tasks by title
- Task details page with status indicator
- Local completion toggle (UI only)
- Loading shimmers, error, and no-result states
- Light/Dark theme toggle with persistence
- Responsive layout

## Tech Stack

- React 19
- React Router
- Vite
- Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)

### Install

1.  ```bash
   cd TaskPilot
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the dev server:
   ``` bash
   npm run dev
   ```

## Routes

- `/` — Home
- `/tasks` — Tasks list
- `/tasks/:taskId` — Task details
- `*` — Error page

## Data Source

Tasks are fetched from JSONPlaceholder:

- https://jsonplaceholder.typicode.com/todos

Note: The completion toggle is local UI state and does not persist to the API.

## Project Structure

```
src
├── components/   UI components (navbar, footer, shimmers, etc.)
├── context/      Theme context and provider
├── hooks/        Reusable hooks (useFetch)
└── pages/        Route-level pages
```

## Screenshots

### Home Page

![Home Page](screenshots/home.png)
![Home Page Dark](screenshots/home_dark.png)

### Tasks List Page

![Tasks List Page](screenshots/tasks_list.png)
![Tasks List Page Dark](screenshots/tasks_list_dark.png)

### Task Details Page

![Task Details Page](screenshots/task_details.png)
![Task Details Page Dark](screenshots/task_details_dark.png)

### Error Page

![Error Page](screenshots/error_page.png)
![Error Page Dark](screenshots/error_page_dark.png)
