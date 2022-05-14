const PERFORM_REGISTER = "PERFORM_REGISTER";

const defaultState = {};

export const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case PERFORM_REGISTER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const registerAction = (payload) => ({
  type: PERFORM_REGISTER,
  payload,
});
