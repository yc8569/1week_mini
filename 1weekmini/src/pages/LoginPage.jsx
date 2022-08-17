import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/modules/userAction";
import Cookies from "universal-cookie";
import apis from "../api/index";
import { setCookie } from "../shared/Cookie";
import { useNavigate } from "react-router-dom";

function LoginPage(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const onUsernameHandler = (e) => {
    setUsername(e.currentTarget.value);
  };
  const onPasswordHanlder = (e) => {
    setPassword(e.currentTarget.value);
  };

  const onSubmitHandler = async(e) => {
    

    let body = {
      username: Username,
      password: Password,
    };

    e.preventDefault(); //1. !!아마 왼쪽꺼 필요없는 걸로 암.
    
    try {
      const response = await apis.postLogin({
        username: Username,
        password: Password,
      });
      console.log(response);
      const AccessToken = response.data.accessToken.split(" ")[0];
      // 아래 setCookie를 통해 Cookie 안에 서버로부터 받은 토큰을 저장한다.
      // console.log(AccessToken);
     
      setCookie("token", AccessToken);
     
      // 위의 setCookie("token", AccessToken) 안의 매겨변수는 "토큰 이름", 토큰값 이다.
      alert("로그인 성공");
      navigate("/");
    } catch (error) {
      alert("로그인 다시시도");
    }
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;