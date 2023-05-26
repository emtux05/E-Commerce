import { HANDLE_BUTTON_SELECTION } from '../action/handleButtonSelectionAction';

const initialState = {
  selectedButton: "",
};

const handleButtonSelectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_BUTTON_SELECTION:
      return {
        ...state,
        selectedButton: action.payload,
      };
    default:
      return state;
  }
};

export default handleButtonSelectionReducer;