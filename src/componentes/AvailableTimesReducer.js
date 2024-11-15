

// availableTimesReducer.js
const AvailableTimesReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TIME':
        return [...state, action.payload];
      case 'REMOVE_TIME':
        return state.filter(time => time !== action.payload);
      case 'RESET_TIMES':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default AvailableTimesReducer;
  