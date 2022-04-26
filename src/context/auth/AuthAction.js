export const loginStart = () => ({
  type: "LOGIN_START",
});

export const loginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const loginFailuer = () => ({
  type: "LOGIN_FAILURE",
});

export const openModalLogin = (payload = false) => ({
  type: "OPEN_MODAL_LOGIN",
  payload: payload,
});
