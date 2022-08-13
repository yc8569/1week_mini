import React from "react";
import styled from "styled-components";
import  Layout  from "../components/Layout";


const MainPage = (props) => {
 
    return (
        <Layout>
          <StContainer>
            <StMain>
              <div className="PostCard">
                <div className="Post-Top">
                    <p>프로필사진</p>
                    <h3>아이디</h3>
                </div>
                <div className="Post-Main">
                      <div>내가올린 사진</div>
                      <p>간단한코멘트</p>
                </div>
                <div>
                  <button>좋아요</button><p>좋아요개수</p>
                  <h3>다른사람아이디 : 댓글</h3>
                  <h3>다른사람아이디 : 댓글</h3>
                  <h3>다른사람아이디 : 댓글</h3>
                  <p>내가올린시간</p>
                  
                </div>
              </div>
             
              
             
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