import React from "react";
import styled from "styled-components";
import  Layout  from "../components/Layout";
import { useSelector } from "react-redux";
import { useNavigate, useE } from "react-router-dom";
import Modal from "../components/Modal";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const MainPage = (props) => {

  // const axiosPost = async()=>{
  //   const res = await axios.get("http://localhost:3000/mainpage");
  //   console.log(res)
    // .then((res) =>{

    //   console.log(res);
    // // window.alert(res.data.answer);
    // return res.data;
    // })
    // .catch((error) => alert(error.message));
    
  // };

axios.get("http://3.35.131.44/api/posts").then(res => {
  //  const posts = res.data  
console.log(res.data)

});


  const [uploadComment, setUploadComment] = useState(false);
  const closeCommentModal = () => {
    setUploadComment(false);
  };
  //  일정수정 모달
  const [Comment, setComment] = useState(false);
  const closeComment = () => {
    setComment(false);
  };
  // const username = 작성자";
  const navigate = useNavigate();
  const posts = useSelector((state)=> state.posts.postList);
  const [toggle, setToggle]= useState(false);

  const onClickHandler = () => {
    setToggle((prev) => !prev);
  };

  // const togglechange = () => {
  //   setToggle((prev) => !prev);
  // };
  // const clickBackdrop = () => {
  //   setToggle((prev) => !prev);
  // };

  //  useEffect(() =>{
  //     axiosPost();

  //   }, [])


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
                        {/* <button onClick={axiosPost}>좋아요</button><p>좋아요개수</p> */}
                        <h3>다른사람아이디 : 댓글</h3>
                        <h3>다른사람아이디 : 댓글</h3>
                        <div>
                        <Modal visible={uploadComment} closeModal={closeCommentModal}>
                          {/* <h2 style={{ textAlign: "center" }}>일정을 적어주세요!</h2>
                          <div>
                            <h4>제목</h4>
                            <input
                              // ref={titleRef}
                              name="title"
                              type={"text"}
                              placeholder={"제목"}
                            ></input>
                            <h5>내용</h5>
                            <input
                              // ref={contentsRef}
                              name="contents"
                              type={"text"}
                              placeholder={"내용"}
                            ></input>
                          </div> */}
                         
                        </Modal>
                        </div>
                       
                        <button
                          onClick={() => {
                            setUploadComment(true);
                          }}
                        >
                          댓글 등록
                        </button>
                        
                  ㅋ
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

const Backdrop = styled.div`
  margin: auto;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  margin-top: 10px;
`;

             
               