import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import apis from "../api/index";


function RegisterPage(props) {
  const [Password, setPassword] = useState("");
  const [Username, setUsername] = useState("");
  const [ConfirmPasword, setConfirmPasword] = useState("");
  
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const goLogin = () => {
    navigate('/');
  }

  const onNameHandler = (e) => {
    setUsername(e.currentTarget.value);
  };

  const onPasswordHanlder = (e) => {
    setPassword(e.currentTarget.value);
  };

  const onConfirmPasswordHandler = (e) => {
    setConfirmPasword(e.currentTarget.value);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
      await apis.idCheck(
        {
          username : Username,
        })
        .then((res) => {
          console.log(res);

          if (res.data === false) {
            alert("사용 가능한 아이디입니다.")
            apis.addUser(
              {
                username : Username,
                password : Password,
              })
              .then((res) => {
                console.log(res);
                alert("회원가입 성공");
                navigate("/");
              })
              .catch((err) => {
                console.log(err);
                alert("회원가입 실패");
              });

          } else if (res.data === true) {
            alert("이미 사용중인 아이디입니다.")
          }
        });
      
      
      // console.log(error);
      // alert("회원가입 실패")
    

    // async function id_check() {
    //   await axios
    //     .post("http://3.35.131.44/user/idCheck",{username: Username})
    //     .then((res) => {
    //       console.log(res)
    //       if (res.data === false) {
    //         alert("사용 가능한 아이디입니다.")
    //       } else if (res.data === true) {
    //         alert("이미 사용중인 아이디입니다.")
    //       }
    //     })
    // }
    
    // id_check()

    // axios
    //     .post(
    //     "http://3.35.131.44/user/register",
        
    //     {username: Username,
    //       password: Password,}
        
    //     )
    //     .then((res) => {
    //     console.log(res);
    //     alert("회원가입 성공");
    //     navigate("/loginpage");
    //     // props.history.push("/login");
    //     // props.navigate.push("/loginpage");
        
    //     })
    //     .catch((err) => {
    //     console.log(err);
    //     alert("회원가입 실패");
    //     });
      }
  
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
        <div 
        onClick={goLogin}
        style={{
          textAlign: "right",
          textDecoration : "underline",
        }}
        >로그인</div>
      </form>
    </div>
  );
}

export default RegisterPage;




