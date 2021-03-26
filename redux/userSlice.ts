import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Dispatch } from "react";
import setAuthToken from "../helpers/AuthHelpers";
import { ConnectUser, IAuth, IUser } from "../typescript";

const initialState = {
  token: "",
  isAuthenticated: false,
  loading: false,
  user: {
    email: "",
    firstName: "",
    lastName: "",
    id: "",
    password: "",
  },
} as IAuth;

const authSlice = createSlice({
  name: "users",
  initialState,

  reducers: {
    authSuccess: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      state.isAuthenticated = false;
      state.loading = false;
      state.token = action.payload.token;
    },
    authFailed: (state) => {
      localStorage.removeItem("token");
      state.isAuthenticated = false;
      state.loading = false;
      state.token = "";
      state.user = null;
    },
    userLoaded: (state, action) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.user = action.payload;
    },
  },
});

const { authSuccess, authFailed, userLoaded } = authSlice.actions;

export const loadUser = () => async (dispatch: Dispatch<any>) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("/api/auth");
    dispatch(userLoaded(res.data));
  } catch (err) {
    //dispatch(ErrorAlert())
    dispatch(authFailed());
  }
};

export const signup = ({
  firstName,
  lastName,
  email,
  password,
}: IUser) => async (dispatch: Dispatch<any>) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ firstName, lastName, email, password });

  try {
    const res = await axios.post("/api/users/signup", body, config);
    dispatch(authSuccess(res.data));
    //dispatch(loadUser)
  } catch (err) {
    //dispatch(ErrorAlert())
    dispatch(authFailed());
  }
};

export const login = ({ email, password }: ConnectUser) => async (
  dispatch: Dispatch<any>
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post("/api/users/login", body, config);
    dispatch(authSuccess(res.data));
    //dispatch(loadUser)
  } catch (err) {
    console.log("Error"); // disptach the Error alert
    dispatch(authFailed());
  }
};
export default authSlice.reducer;
