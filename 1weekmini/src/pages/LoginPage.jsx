import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/modules/userAction";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LoginPage(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const goSignup = () => {
    navigate('/register');
  }

  const onUsernameHandler = (e) => {
    setUsername(e.currentTarget.value);
  };
  const onPasswordHanlder = (e) => {
    setPassword(e.currentTarget.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    let body = {
      username: Username,
      password: Password,
    };

    axios
        .post(
          "http://3.35.131.44/user/login",
        
          {
            username: Username,
            password: Password,
          })

          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
            alert("로그인 실패")
          });
          

    // dispatch(loginUser(body))
    //   .then((res) => {
    //     if (res.payload.loginSuccess) {
    //       props.history.push("/");
    //     } else {
    //       alert(res.payload.message);
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}>
      <form
        onSubmit={onSubmitHandler}
        style={{ display: "flex", flexDirection: "column" }}>
        <label>username</label>
        <input type="text" value={Username} onChange={onUsernameHandler} />
        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHanlder} />
        <br />
        <button type="submit">로그인</button>
        <div 
        onClick={goSignup}
        style={{
          textAlign: "right",
          textDecoration : "underline",
        }}
        >회원가입</div>
        <br />
        
      </form>
    </div>
  );
}

export default LoginPage; 

