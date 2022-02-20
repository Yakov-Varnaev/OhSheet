import {
  LOGIN_HEADER,
  REGISTER_HEADER,
  AUTHENTICATED_HEADER,
  ANON_HEADER,
} from "../types";
import { headerTypes } from "../../Enums/headerEnums";

const initialState = {
  headerType: headerTypes.ANON,
};

export const headerReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case LOGIN_HEADER:
      return { ...prevState, headerType: headerTypes.LOGIN };
    case REGISTER_HEADER:
      return { ...prevState, headerType: headerTypes.REGISTER };
    case ANON_HEADER:
      return { ...prevState, headerType: headerTypes.ANON };
    case AUTHENTICATED_HEADER:
      return { ...prevState, headerType: headerTypes.AUTHENTICATED };
    default:
      return prevState;
  }
};
