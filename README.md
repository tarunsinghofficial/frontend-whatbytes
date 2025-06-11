# WhatBytes E-commerce Store

This is a modern e-commerce application built with Next.js, React, Tailwind CSS, and Zustand for client-side state management. It features a product listing page with advanced filtering, a product detail page, and a functional cart.

**Live Link (Depployed): https://frontend-whatbytes-omega.vercel.app/**

![image](https://github.com/user-attachments/assets/8dcfb569-81db-4773-a2fd-b4bb86033df4)

## Features

-   **Product Listing Page**: Displays a grid of products with a responsive design.
-   **Filtering & Search**:
    -   **Category Filtering**: Filter products by different categories.
    -   **Price Range Slider**: Filter products by a continuous price range using a slider.
    -   **Search Functionality**: Search for products by title or description from the header.
    -   **URL-based Filters**: Filters are synchronized with URL parameters for shareable links and browser history.
-   **Product Detail Page**:
    -   Dedicated page for each product accessible via clicking on product cards.
    -   Displays product image, title, price, description, and category.
    -   Quantity selector for adding multiple items to the cart.
    -   Includes a customer reviews section (with sample data).
-   **Shopping Cart**:
    -   Client-side state management using **Zustand** for a lightweight and flexible store.
    -   Cart state persists in `localStorage` across sessions.
    -   Displays a list of added products.
    -   Quantity update controls for each item in the cart.
    -   Option to remove items from the cart.
    -   Price summary (subtotal and total).
    -   "Empty Cart" message with a "Continue Shopping" link.
-   **Responsive UI**: Optimized for various screen sizes using Tailwind CSS.
-   **Modern Design**: Clean, intuitive user interface matching the provided design.

## Technologies Used

-   **Next.js**: React framework for production.
-   **React**: JavaScript library for building user interfaces.
-   **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
-   **Zustand**: A small, fast, and scalable bearbones state-management solution.
-   **Next/Image**: For optimized image handling.
-   **Next/Link**: For client-side navigation.
-   **Next/Navigation**: For accessing URL parameters.

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

Make sure you have Node.js (v18.x or later) and npm (or yarn) installed on your machine.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/tarunsinghofficial/frontend-whatbytes.git
    cd frontend-whatbytes
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Development Server

To run the application in development mode:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

To build the application for production:

```bash
npm run build
# or
yarn build
```

This command creates an optimized build in the `.next` folder.

### Running the Production Build

To run the built application:

```bash
npm start
# or
yarn start
```
