import React from "react";
import styled from "styled-components";


const Header = () => {

  return (
    <StContainer>
        <StTitle>
            SPARTAGRAM
        </StTitle>
        <button>홈으로</button>
        <button>회원가입</button>
      
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
