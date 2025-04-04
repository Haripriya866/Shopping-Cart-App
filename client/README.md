# Title
Shopping Cart App

## Objective
Create a simple React application that allows users to add products to a shopping cart, update quantities, and track their progress towards earning a free gift.

## Demo

Link: https://shopping-cart-app-alpha.vercel.app

## Tech Stack
HTML, CSS, JS, ReactJS, Vite, Github, and vercel for hosting the repository.

### Functionality
* Display Products: 
    Use the given PRODUCTS constant to render a list of products.
    Each product should have a quantity selector with + and - buttons and an "Add to Cart" button.
* Shopping Cart:
    Display the cart below the products.
    Allow users to update product quantities in the cart.
    Allow users to remove products from the cart.
^ Free Gift Rule:
    If the cart subtotal reaches THRESHOLD (1000), add the FREE_GIFT product automatically.
    Show a progress bar above the cart indicating how much more needs to be added before the free gift is unlocked.
    Ensure only one free gift is added, and it cannot be removed manually.
    Make sure the cart gift item is removed if the cart value goes below the Threshold value
* State Management:
    Use React’s built-in state management (useState, useEffect).
    Maintain separate states for products and cart.
* User Experience:
    Show a message when the free gift is added.
    Ensure smooth interactions for adding/removing items.

  
## Setup Instructions
* Initial Setup: open root folder for project in vscode: cd Shopping Cart App
* initialize git in this folder (Shopping Cart App): git init

    Set Up the client:

        Run the following command to generate a React app (npm init vite)

        Create a new folder for the client:
        mkdir client

        Navigate to the client folder:
        cd ../client

        Install the necessary dependencies:
        npm install
        npm install react-router-dom@5 lucide-react

    Folder Structure and Logic: 
        client:

        The src folder contains the main logic for the React application.
        Components for the project are created in the components/ folder within src.
    
    Running the Application:
        Start the client:

            Navigate to the client folder:
            cd ../client
    
            Start the React development client:
            npm run dev


## Resources
## Design files
Cart