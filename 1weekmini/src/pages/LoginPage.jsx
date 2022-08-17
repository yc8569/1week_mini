import React, { useState, useContext } from "react";
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

  const goSignup = () => {
    navigate('/register');
  }

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
      const response = await apis.loginUser({
        username: Username,
        password: Password,
      });
      console.log(response);
      const AccessToken = response.data.accessToken.split(" ")[0];
      const TokenExpiresIn = response.data.accessTokenExpiresIn;
      // 아래 setCookie를 통해 Cookie 안에 서버로부터 받은 토큰을 저장한다.
      console.log(TokenExpiresIn);

      // let date = new Date();
      // date.setTime()
     
      setCookie("token", AccessToken);
      localStorage.setItem("accessToken", AccessToken);
     
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
        <label>password</label>
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

