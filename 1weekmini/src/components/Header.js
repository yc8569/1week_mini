import React from "react";
import styled from "styled-components";


const Header = () => {
  
  return (
    <StContainer>
      <StTitle>SPARTAGRAM</StTitle>
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
