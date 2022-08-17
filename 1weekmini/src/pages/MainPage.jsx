import React from "react";
import styled from "styled-components";
import  Layout  from "../components/Layout";
// import { useSelector } from "react-redux";
import { useNavigate,} from "react-router-dom";
import Modal from "../components/Modal";
import { useState } from "react";
import axios from "axios";
import { useEffect, useRef } from "react";
import CommentCom from "../comment/CommentCom";
import apis from "../api/index"

// import AuthContext from "../contextStore/auth-context";
// import { withRouter } from 'react-router-dom';
// import { useEffect } from "react";
// import { getCookie } from "../shared/Cookie";

const MainPage = (props) => {
  // const [fetchData, setFetchData] = useState([]);
  const [posts, setPosts] = useState([]);
  const [postId, setPostId] = useState();
  const commentRef = useRef()
  

  // const accessToken = localStorage.get("accessToken");
  // console.log(accessToken)
  const fetchPosts = async () => {
    const { data } = await axios.get("http://3.35.131.44/api/posts");
    setPosts(data.data);
    // console.log(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);


  // axios
  // .get(
  //   "http://3.35.131.44/api/posts",
  //   {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${accessToken}`,
  //     },
  //   },
  //   { withCredentials: true }
  // )
  // .then((res) => {
  //   const getfetchdata = res.data.data;
  //   // console.log(getfetchdata);
  //   setFetchData(getfetchdata);
    
  // })
  // .catch((err) => {
  //   console.log(err);
  // });


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
  // const posts = useSelector((state)=> state.posts.postList);
  const [toggle, setToggle]= useState(false);

  const onClickHandler = () => {
    setToggle((prev) => !prev);
  };
  // console.log(posts.post.postId)
  const onUpdateHandler = async (getCom) => {
    const postid = await apis.getPosts()
    console.log(postid.data)
    const com = commentRef.current.value;
    // const userIdCheck = () => {
    apis.addComment(
      postId,
      com
      )
      console.log(com)
    // }

  
    
    // console.log(com)
  }
  

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
                  console.log(post.postId)
                  return(
                    <Box >
                      <div className="Post-Top" >
                        <p>{post.postId}</p>
                        <h3
                        onClick={()=>{
                          navigate(`/mypage/${post.author}`)
                        }}
                        >{post.username}</h3>
                      </div>
                      <div className="Post-Main">
                        <div>내가올린 사진</div>
                        
                        <p>{post.contents}</p>
                      </div>
                      <div>
                      <p>{new Date(post.modifiedAt).toLocaleString()}</p>
                        {/* <button onClick={axiosPost}>좋아요</button><p>좋아요개수</p> */}
                        
                        <h3>다른사람아이디 : 댓글</h3>
                        <div>
                        <Modal visible={uploadComment} closeModal={closeCommentModal}>
                          <h2 style={{ textAlign: "center" }}>ID?뭐넣지?</h2>
                          <Contents>
                            <h4>댓글들</h4>
                          </Contents>
                          <CommentStyle>
                            <text>아이디</text>
                            <input
                              ref={commentRef}
                              name="contents"
                              type={"text"}
                              placeholder={"내용"}
                            ></input>
                            <button onClick={() => onUpdateHandler()}>댓글달기</button>
                          </CommentStyle>
                        </Modal>
                        
                        </div>
                       <CommentCom />
                        <button
                          onClick={() => {
                            setUploadComment(true);
                            setPostId(post.postId);
                          }}
                        >
                          댓글 등록
                        </button>
                        
                  
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

const Contents = styled.div`
  height: 17vh;
`

const CommentStyle = styled.div`
  position: bottom;
`