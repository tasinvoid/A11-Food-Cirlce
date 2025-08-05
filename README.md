

**Food** Circle 🍎

### 🚀 Live Site URL

[ https://food-circle-fce91.web.app/]

---

### 🍽️ SharePlate: Community Food Sharing Hub

A full-stack web application designed to combat food waste by connecting users who have surplus food with those who need it. This platform provides a secure and intuitive interface for managing food listings, making requests, and fostering a community dedicated to food sharing. Built with a modern tech stack, the website is highly responsive and designed to be visually appealing and user-friendly.

---

### ✨ Key Features

* **Comprehensive Authentication:** 🔑 Secure **login and registration** using email/password, with robust password validation. The application also supports social login with Google/GitHub for a seamless user experience.
* **JWT Security:** 🛡️ Private routes are protected using **JSON Web Tokens (JWT)**. A token is created upon login and stored on the client side to authenticate and verify users for secure access to features.
* **Full CRUD Functionality:** 📝 Authenticated users can **add new food items**, **manage their own listings** by updating or deleting them, and view available food from other users.
* **Dynamic Food Listings:** 🔎 The "Available Foods" page allows users to **search for foods by name** and **sort listings by their expiry date**. The layout can also be toggled between a two- and three-column view for a customized Browse experience.
* **Food Request System:** 🛒 Users can **request food** through a modal on the food details page. This action changes the food's status and adds it to the requester's "My Food Request" list.
* **User-Centric Management:** 🧑‍💻 The "Manage My Foods" page gives users a dedicated space to view their own food listings in a table and perform update or delete actions. The "My Food Request" page tracks all their active requests.
* **Advanced Frontend Concepts:** ⚛️ The project utilizes **TanStack Query** for efficient API data fetching and mutations, and **Framer Motion** for beautiful animations on the home page.
* **Recruiter-Friendly Design:** 🎨 The website is built with a focus on clean design, proper alignment, and pleasing color contrast to ensure a professional and impressive user interface.

---

### 🛠️ Technologies Used

#### **Client-Side**

* **React:** ⚛️ The core JavaScript library for building the single-page application's user interface.
* **React Router DOM:** ➡️ For handling client-side routing, private routes, and state preservation.
* **Firebase Authentication:** 🔐 Used for all user authentication methods.
* **TanStack Query:** 🚀 For managing server state, caching, and making API requests.
* **Framer Motion:** ✨ For implementing engaging animations.
* **Toast / SweetAlert:** 🔔 For providing a smooth user experience with notifications.
* **Axios:** 🌐 Used for making API requests, potentially with a custom hook.

#### **Server-Side**

* **Node.js & Express.js:** ⚙️ The backend runtime and framework for building a RESTful API.
* **MongoDB:** 📂 A NoSQL database used to store all food and user data.
* **JSON Web Tokens (JWT):** 🔒 For creating and verifying tokens to secure API routes.


### 🚀 Hosting

The client is hosted on **[Netlify / Surge]** and the server is hosted on **Vercel**. The application is configured to handle page reloads on any route without errors, and the domain is authorized with Firebase for authentication.
