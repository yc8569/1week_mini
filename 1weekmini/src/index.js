import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import store  from './redux/config/configStore';
// import { applyMiddleware, createStore } from "redux";
// import promiseMiddlerware from "redux-promise";
// import reduxThunk from "redux-thunk";
// import reducer from "./_reducers";
import reportWebVitals from "./reportWebVitals"
import { AuthContextProvider } from "./contextStore/auth-context";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>

  </AuthContextProvider>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();