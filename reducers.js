const initialState = {
    selectedDiseases: [
      {
        id: 'Diabetes',
        name: 'Diabetes',
        selected: false, // Initially not selected
      },
      {
        id: 'HighBloodPressure',
        name: 'High Blood Pressure',
        selected: false, // Initially not selected
      },
      // Add more diseases as needed
    ],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_DISEASES':
        return {
          ...state,
          selectedDiseases: action.payload,
        };
      // Add other cases for your other actions if needed
      default:
        return state;
    }
  };
  
  export default rootReducer;
  