import React from "react";
import styled from "styled-components";
import  Layout  from "../components/Layout";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const MainPage = (props) => {
  // const username = 작성자";
  const navigate = useNavigate();
  const posts = useSelector((state)=> state.posts.postList);
  console.log(posts)



    return (
        <Layout>
          <StContainer>
            <StMain>
              <div className="PostCard">
                {posts.map((post)=>{
                  return(
                    <Box >
                      <div className="Post-Top" >
                        <p>{post.postId}</p>
                        <h3
                        onClick={()=>{
                          navigate(`/mypage/${post.username}`)
                        }}
                        >{post.username}</h3>
                      </div>
                      <div className="Post-Main">
                        <div>내가올린 사진</div>
                        <p>{post.contents}</p>
                      </div>
                      <div>
                      <p>{new Date(post.createdAt).toLocaleString()}</p>
                        <button>좋아요</button><p>좋아요개수</p>
                        <h3>다른사람아이디 : 댓글</h3>
                        <h3>다른사람아이디 : 댓글</h3>
                        <h3>다른사람아이디 : 댓글</h3>
                        
                  
                       </div>
                    </Box>
                  )
                })}
                
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

const Box = styled.div`
  border: 1px solid rebeccapurple;
  border-radius: 10px;
`;

             
               