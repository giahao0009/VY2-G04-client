const AuthReducer = (state, action) => {
  switch (action.type) {
    case "OPEN_MODAL_LOGIN": {
      return {
        user: null,
        isFetching: false,
        error: false,
        modalLogin: action.payload, 
        modalRegister: false,
      };
    }
    case "OPEN_MODAL_REGISTER": {
      return {
        user: null,
        isFetching: false,
        error: false,
        modalLogin: false,
        modalRegister: true,
      };
    }
    case "LOGIN_START": {
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    }

    case "LOGIN_SUCCESS": {
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    }

    case "LOGIN_FAILURE": {
      return {
        user: null,
        isFetching: true,
        error: true,
      };
    }

    default: {
      return { ...state };
    }
  }
};

export default AuthReducer;
