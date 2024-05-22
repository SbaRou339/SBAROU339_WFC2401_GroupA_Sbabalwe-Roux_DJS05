// Initial state of the tally counter
const initialState = {
    count: 0
  };
  
  // Reducer function to handle actions
  function counterReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD':
        return { ...state, count: state.count + 2 };
      case 'SUBTRACT':
        return { ...state, count: state.count - 1 };
      case 'RESET':
        return { ...state, count: 0 };
      default:
        return state;
    }
  }
  
  // Create a store function
  function createStore(reducer) {
    let state = reducer(undefined, {});
    let listeners = [];
  
    // Get the current state
    const getState = () => state;
  
    // Dispatch an action to change the state
    const dispatch = (action) => {
      state = reducer(state, action);
      listeners.forEach(listener => listener());
    };
  
    // Subscribe to state changes
    const subscribe = (listener) => {
      listeners.push(listener);
      return () => {
        listeners = listeners.filter(l => l !== listener);
      };
    };
  
    return { getState, dispatch, subscribe };
  }
  
  // Create the store with the counterReducer
  const store = createStore(counterReducer);

  // Log the initial state
console.log('Initial state:', store.getState());
  
  // Subscribe to state changes and log the new state
  store.subscribe(() => {
    console.log('State changed:', store.getState());
  });
  
  // Test the functionality
  store.dispatch({ type: 'ADD' });
  store.dispatch({ type: 'SUBTRACT' });
  store.dispatch({ type: 'RESET' });
  