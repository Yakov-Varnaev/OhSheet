import { registerAction } from "../reducers/authReducer";

export const performRegister = (data) => {
  data = { ...data, username: data.email };
  return (dispatch) => {
    fetch("http://localhost:8000/api/auth/users/", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          response.json();
        } else {
          console.log(response.text());
        }
      })
      .then((json) => dispatch(registerAction(json)));
  };
};
