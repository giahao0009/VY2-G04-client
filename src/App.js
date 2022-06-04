import React, { useEffect, useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import "./scss/App.scss";
import { findGetParameter } from "./untils";
import authApi from "./apis/authApi";
import { loginSuccess } from "./context/auth/AuthAction";
import { AuthContext } from "./context/auth/AuthContext";

function App() {
  const { isFetching, dispatch } = useContext(AuthContext);
  useEffect(() => {
    try {
      const token = findGetParameter("token");
      if (token != undefined && token.length > 0) {
        const auth = async () => {
          const response = await authApi.getUser(token);
          console.log(response.data.data);
          let user = {
            userId: response.data.data.userId,
            name: response.data.data.name,
            accessToken: token,
            email: response.data.data.email,
          };
          dispatch(loginSuccess(user));
        };
        auth();
      }
    } catch (e) {
      console.log(e);
    }
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
