import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Header = () => {
 const navigate =useNavigate();
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
