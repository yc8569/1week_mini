import React from "react";
import  Layout  from "../components/Layout";
import styled from "styled-components";

const MainPage = () => {
  
  return (
    <Layout>
      <StContainer>
        <StMain>
          <h1>git무엇을 할까요?</h1>
        </StMain>
      </StContainer>
    </Layout>
  );
};

export default MainPage;

const StContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const StMain = styled.div`
  margin-top: 24px;
  gap: 24px;
`;
