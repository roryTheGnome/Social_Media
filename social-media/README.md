# Social Media SPA

## 📖 Description

This project is a **Single Page Application (SPA)** built with modern frontend technologies.
The goal of the project was to practice building a structured React application using **TypeScript**, routing, asynchronous data fetching, and a modular architecture.

The application simulates a simple anonymous social media platform where users can:

* Log in using API users
* View a feed of posts
* Create local posts anonymously
* Navigate between multiple pages
* Use a real-time chat powered by WebSockets

The project was built as part of a practical assignment focused on modern React development practices.

---

# 🚀 Live Demo

Deployed on Netlify.

**Live Application:**
https://anonymous-sm.netlify.app/

---

# ⚙️ Tech Stack

Main technologies used in this project:

* React
* TypeScript
* Vite
* TanStack Router
* TanStack Query
* Tailwind CSS
* Axios
* WebSocket

---

# 📦 Features

### Authentication

* Login page with validation
* Users fetched from DummyJSON API
* Navbar changes based on authentication state

### Feed

* Fetches posts from API
* Displays posts in a clean UI
* Users can create local posts

### Routing

* Multi-page navigation using TanStack Router
* Pages include:

    * Home
    * Login
    * Register
    * Feed
    * Chat

### API Integration

* Data fetched using TanStack Query
* API requests handled via Axios
* Posts loaded from DummyJSON API

### Chat (Extra Feature)

* Real-time messaging via WebSocket
* Messages sent and received instantly
* Uses the WebSocket echo server

### Responsive Design

* Mobile-friendly layout
* Separate mobile navigation
* Built with Tailwind CSS

---

# 🌐 API

The project uses the public API:

DummyJSON
https://dummyjson.com

Endpoints used:

```
https://dummyjson.com/posts
https://dummyjson.com/users
```

---

# 🔌 WebSocket Chat

The chat module uses a public WebSocket echo server:

```
wss://ws.ifelse.io
```

Messages are sent through the WebSocket connection and echoed back to the client in real time.

---

# 🛠 Installation

Clone the repository:

```
git clone https://github.com/roryTheGnome/Social_Media.git
```

Navigate to the project folder:

```
cd social-media
```

Install dependencies:

```
npm install
```

Start development server:

```
npm run dev
```

The application will run at:

```
http://localhost:5173
```

---

# 🏗 Build

To create a production build:

```
npm run build
```

Preview the build:

```
npm run preview
```

---

# 📤 Deployment

The project is deployed using **Netlify**.

Deployment steps:

1. Push repository to GitHub
2. Connect repository to Netlify
3. Set build command

```
npm run build
```

Publish directory:

```
dist
```

---

# 📚 Project Logs


* 04-05/03:
  * Got familiar with given technologies
  * Project plan and roadmap created

  * Project topic has chosen as : Social Media App
  *Technology Choices:
    * *React
    * *Vite
    * *TypeScript
    * *TanStack Router
    * *TanStack Query
    * *REST API (DummyJSON users and posts)
    * Tailwind
    * Prettier
    * Eslint
    * Axois
    * WebSocket
      * (the techs referred with * were given mandatory to use)

* 06/03
  * Project inited
  * Created via Vite (ts-react) 
  * Libs added: eslint , prettier , tanstack libs , tailwind 
  * Basic layout created (nav+{child}+footer) 
  * Welcome page created
  * TanStack Router set up

* 07/03
  * Auth added (mock)
  * System wrapped around AuthContext.Provide
  * Login and Register pages created

* 08/03
  * API integration for posts
  * API integration for users, login logic changed
  * Feed page added
  * Deployed via netlify successfully

* 09/03
  * Few adjustments for netlify (minor error in sublinks detected and fixed)
  * Scroll to top toggle added to Feed page
  * very simple robots.txt added
  * chat feature via given websocket url added
  * chat page added
  * README added

---

# 👨‍💻 Commit Structure

* INIT - initializing
* FIX - bug fix
* FEAT - new feature
* STYLE - formatting
* CHANGE - change on a prev decision
* CHORE - changed/adds for performance/config change/deployment/etc.
