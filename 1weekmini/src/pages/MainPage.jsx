import React from "react";
import styled from "styled-components";
import  Layout  from "../components/Layout";


const MainPage = (props) => {
 
    return (
        <Layout>
          <StContainer>
            <StMain>
              <p>무엇을 할까요?</p>
             
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
  flex({
    direction: "column",
    align: "start",
  })
  gap: 24px;
`;