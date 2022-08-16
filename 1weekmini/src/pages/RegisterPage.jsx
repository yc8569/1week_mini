import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/modules/userAction";


function RegisterPage(props) {
  const [Password, setPassword] = useState("");
  const [Username, setUsername] = useState("");
  const [ConfirmPasword, setConfirmPasword] = useState("");
  
  const dispatch = useDispatch();


  const onNameHandler = (e) => {
    setUsername(e.currentTarget.value);
  };

  const onPasswordHanlder = (e) => {
    setPassword(e.currentTarget.value);
  };

  const onConfirmPasswordHandler = (e) => {
    setConfirmPasword(e.currentTarget.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (Password === ConfirmPasword) {
      let body = {
        Username: Username,
        password: Password,
      };
      dispatch(registerUser(body)).then((res) => {
        alert("가입이 정상적으로 완료되었습니다");
        props.history.push("/login");
      });
    } else {
      alert("비밀번호가 일치하지 않습니다");
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

        <label>UserName</label>
        <input type="text" value={Username} onChange={onNameHandler} />

        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHanlder} />

        <label>ConfirmPasword</label>
        <input
          type="password"
          value={ConfirmPasword}
          onChange={onConfirmPasswordHandler}
        />
        <br />
        <button type="submit">회원 가입</button>
      </form>
    </div>
  );
}

export default RegisterPage;