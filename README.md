## 🍕 Fast Pizza App 🚀

Welcome to the **Fast Pizza App**\! This is a modern, responsive web application designed to allow users to quickly browse a menu and place pizza orders. It showcases best practices in frontend development, state management, and interaction with a RESTful API.

-----

## 🌐 Live Demo

You can view a live deployment of a similar **Fast React Pizza Co.** application to see the features in action:

  * **View Demo:** 
  https://fast-pizza-app-sdxy.vercel.app/
--- 

## ✨ Features

This application offers a complete, streamlined ordering process, focusing on user experience and efficient state handling.

  * **Dynamic Menu:** Pizza options are fetched from a remote API, ensuring the menu is always up-to-date.
  * **Easy Ordering:** Add multiple pizzas to your cart and place an order using just your name, phone number, and address.
  * **Geolocation Integration:** Option to request the user's GPS location for quick and accurate delivery address autofill.
  * **Priority Orders:** Users can mark their order as **"Priority"** for faster preparation and delivery (incurs a small surcharge).
  * **Post-Order Modification:** Ability to upgrade a standard order to a priority order even after it has been placed.
  * **Order Tracking:** Each order is assigned a **unique ID**, which allows users to look up and track their order status at any time.
  * **State Management:** Utilizes a robust state management solution (e.g., Redux Toolkit) to handle application data seamlessly.
  * **Responsive Design:** Fully functional and visually appealing on all devices (mobile, tablet, and desktop).

-----

## 💻 File Structure

This project follows a standard React application structure, leveraging **Vite** and a clear feature-based component organization.

```
fast-pizza-app/
├── node_modules/
├── public/                 # Static assets (e.g., favicon, placeholder images)
├── src/
│   ├── assets/             # Images, logos, or global styling files
│   ├── features/           # Redux logic, containing slices for cart, user, and order
│   │   ├── cart/
│   │   ├── order/
│   │   └── user/
│   ├── ui/                 # Reusable, presentational components (buttons, headers, etc.)
│   ├── pages/              # Components representing full application routes/views
│   │   ├── Home.jsx
│   │   ├── Menu.jsx
│   │   ├── Cart.jsx
│   │   ├── CreateOrder.jsx
│   │   └── Order.jsx
│   ├── services/           # Modules for external API interaction
│   │   └── apiRestaurant.js
│   ├── store.js            # Redux store configuration
│   ├── App.jsx             # Main router component
│   ├── main.jsx            # Entry point (initializes Redux Provider, etc.)
│   └── index.css           # Global styles and Tailwind imports
├── index.html              # Main HTML file
├── package.json
├── vite.config.js          # Vite configuration
└── README.md
```



-----

## 🛠️ Technologies Used

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Frontend Framework** | **React** | For building the user interface. |
| **Routing** | **React Router** | For declarative routing within the application. |
| **State Management** | **Redux Toolkit (RTK)** | For predictable state management and asynchronous data fetching. |
| **Styling** | **Tailwind CSS** | A utility-first CSS framework for rapid and responsive UI development. |
| **Bundler/Dev Server** | **Vite** | For a fast and efficient development environment. |
| **Data Fetching** | Custom API Integration | Interacting with a dedicated pizza ordering API. |

-----

## 🚀 Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

You must have **Node.js** and **npm** (or **yarn**) installed on your machine.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/o064/fast-pizza-app.git
    cd fast-pizza-app
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    # yarn install
    ```

### Running the Application

1.  **Start the development server:**

    ```bash
    npm run dev
    # or
    # yarn dev
    ```

2.  The application should now be running at `http://localhost:5173` (or another port specified by Vite).

-----

## 📝 Usage

1.  Navigate to the **Menu** page to browse available pizzas.
2.  Use the **Cart** to review your selections and adjust quantities.
3.  Proceed to the **Order Form** to enter delivery details (name, phone, address).
4.  Optionally, click the geolocation button to attempt to autofill your location.
5.  After placing an order, you will receive a unique **Order ID**.
6.  Use the `Order` lookup feature on the homepage to track your order's status using the ID.

