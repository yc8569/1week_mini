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
// import apis from "../api/index"

// import AuthContext from "../contextStore/auth-context";
// import { withRouter } from 'react-router-dom';
// import { useEffect } from "react";
import { getCookie } from "../shared/Cookie";

const MainPage = (props) => {
  // const [fetchData, setFetchData] = useState([]);
  const [posts, setPosts] = useState([]);
  const [postId, setPostId] = useState();
  const commentRef = useRef()
  const accessToken = getCookie('token');

  // const accessToken = localStorage.get("accessToken");
  // console.log(accessToken)
  const fetchPosts = async () => {
    const { data } = await axios.get("http://3.35.131.44/api/posts",
    {
      headers:{
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,}
  });
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

  const onUpdateHandler = async () => {
    const com = commentRef.current.value;
    await axios.post(`/api/post/${postId}`,
    { 
      'commentContent' : com ,
    },
      {
        headers:{
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,}
    }
      
    
    )
      .than((res) => console.log(res))
      
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
          <Modal visible={uploadComment} closeModal={closeCommentModal}>
            <h2 style={{ textAlign: "center" }}>ID?뭐넣지?</h2>
            {/* <Contents>
              <h4>댓글들</h4>
            </Contents> */}
            {/* <CommentCom id={post.postId} /> */}
            <CommentStyle>
              <p>아이디</p>
              <input
                ref={commentRef}
                name="contents"
                type={"text"}
                placeholder={"내용"}
              ></input>
              <button onClick={() => onUpdateHandler()}>댓글달기</button>
            </CommentStyle>
          </Modal>
            <StMain>
              <div className="PostCard" style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '30px'
              }}>
                {posts.map((post)=>{
                  console.log(post);
                  return(
                    <Box key={post.postId}>
                      <div className="Post-Top" style={{}} >
                        <p>{post.postId}메인아이디</p>
                        <h3
                        onClick={()=>{
                          navigate(`/mypage/${post.author}`)
                        }}
                        >{post.author}메인이름</h3>
                      </div>
                      <div className="Post-Main">
                        <div>내가올린 사진</div>
                        {/* <img src={post.imgUrl} alt={"안떠"} /> */}
                        
                        <p>{post.contents}메인내용</p>
                      </div>
                      <div>
                      <p>메인시간{new Date(post.modifiedAt).toLocaleString()}</p>
                        {/* <button onClick={axiosPost}>좋아요</button><p>좋아요개수</p> */}
                        
                        
                        <div>
                          
                        
                        </div>
                       <CommentCom id={post.postId}/>
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
  /* position: relative; */
  width: 100%;
  height: 100%;
`;

const StMain = styled.div`
  margin-top: 24px;
  /* display : flex;
  flex-direction: column;
  align-items: start; */
  /* flex{
    direction: "column",
    align: "start",
  }; */
  gap: 24px;
  margin : auto;
`;

const Box = styled.div`
  border: 1px solid rebeccapurple;
  border-radius: 10px;
  padding: 20px;
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
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