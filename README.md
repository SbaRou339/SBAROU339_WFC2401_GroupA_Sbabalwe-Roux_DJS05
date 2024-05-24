# Redux-inspired Counter Application

This project demonstrates a simple counter application using a Redux-inspired state management system in vanilla JavaScript.

## How to Run the Code

1. **Clone the Repository:**
   ```bash
   git clone <https://github.com/SbaRou339/SBAROU339_WFC2401_GroupA_Sbabalwe-Roux_DJS05.git>
   cd redux-counter
2. Navigate the project and then run it using Open Live Server

## Overview of the Approach

1. HTML (index.html): Provides the structure of the web page including the counter display and buttons for user interaction.

2. CSS (styles.css): Styles the web page for a clean and user-friendly interface.

3. JavaScript (store.js):

- Initial State: Defines the initial state of the counter with count set to 0.
- Reducer: A function counterReducer that updates the state based on the action type.
- Store Creation: A function createStore that manages the state, dispatches actions, and notifies listeners.
- Rendering Logic: A render function to update the counter display, subscribed to store updates to reflect changes in the UI.
- Event Listeners: Added to the buttons to dispatch actions when clicked.

## Challenges and Solutions

### 1. Managing State

#### Challenge
One of the primary challenges was implementing a Redux-like state management system from scratch. This involved creating a store that can handle state transitions, dispatch actions, and notify subscribers.

#### Solution
I implemented a createStore function that initializes the state, allows state updates through dispatching actions, and maintains a list of listeners to notify on state changes.

### 2. Synchronizing UI with State

#### Challenge
Ensuring the UI remains in sync with the state changes was crucial. It required setting up a subscription mechanism to update the counter display whenever the state changes.

#### Solution
I created a render function that updates the counter value in the DOM. This function is subscribed to the store so that it runs whenever the state changes, ensuring the UI is always up-to-date.
