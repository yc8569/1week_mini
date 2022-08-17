import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../shared/Cookie";
import { deleteCookie } from "../shared/Cookie";
import { Link } from "react-router-dom";
import apis from "../api/index";

const Header = () => {
 
  const cookie = getCookie("token");
  const navigate = useNavigate();

  const [is_cookie, setCookie] = React.useState(false);

  React.useEffect(() => {
    if (cookie !== undefined) {
      return setCookie(true);
    }
  }, []);

  const onLogout = (e) => {
    localStorage.clear();
    deleteCookie("token");
    setCookie(false);
    
    
    
  };




  return (
    <StContainer>
        <StTitle>
            SPARTAGRAM
        </StTitle>
        <button onClick={()=>{
          navigate('/')
        }}>HOME</button>
        <button onClick={() =>{
          navigate('/loginpage')
        }}>회원가입 : 마이페이지</button>
        <button onClick={()=>{
          navigate('/postpage')
        }}>게시물작성</button>
         <button onClick={()=>{
          onLogout();
          navigate('/loginpage');
          window.location.reload(true);
        }}>로그아웃</button>
    </StContainer>
  );
};

export default Header;

const StContainer = styled.header`
 
  height: 45px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  padding: 0 12px;
`;

const StTitle = styled.div`
  font-size: 24px;
`;



