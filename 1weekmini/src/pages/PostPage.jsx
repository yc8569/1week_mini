import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { addPost } from "../redux/modules/post";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useRef } from 'react';
import { getCookie, setCookie } from '../shared/Cookie';

let number = 3
const PostPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState();
  let formData = new FormData();
  // cookie get
  const username = getCookie('username');
  const myUserId = getCookie('userId');


  const imageRef = useRef();
  const usernameRef = useRef();
  const contentsRef = useRef();
  const filesRef = useRef();
  
    //파일 미리볼 url을 저장해줄 state - copy & paste
    const [fileImage, setFileImage] = useState("");

      //보내줄 파일을 저장해줄 state
  const [fileImgUp, setImage] = useState();

  // 파일 저장 - 로컬에서만 볼 수 있다
  const saveFileImage = (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0])
  };

  const initialState ={
    createdAt: null,
    postId:0,
    username : "",
    contents: "",
    file: "",
    imgurl:[],
  };


  const [post, setPost] = useState(initialState);
  const dispatch = useDispatch();

  const onChangeHandler = (event) => {     //어떤이름으로 올릴꺼니
    
    // const uploded_file = uploadBytes(ref(storage,`image/${event.target.file[0].name}`),
    // event.target.file[0]  //어떤거를 올릴꺼니
    // );

    setPost({
      ...post,
      [event.target.name]: event.target.value,
    })
    
}



const handleSubmit =(event)=>{
  event.preventDefault();
  const createdAt = new Date().getTime();
  console.log(createdAt);
 

  
  // if (post.title.trim() === '' || post.contents.trim() === '') 
  // return(alert("빈칸입니다"));
  dispatch(addPost({...post, postId: number, createdAt,}));

// console.log(post);
// axios
// .post("http://localhost:5000",{post})
// .then((res) => {
//   console.log(res.data);
//   navigate("/");
//   return res.data;
// })
// .catch((error) => alert(error.message));


  setPost(initialState);
  
  navigate('/');
  number = number+1;
}


  return (
    <Layout>
      <StContainer>
      <StForm
        onSubmit={handleSubmit }
      >
        <StMain>
          <div mg="10px 0">
            <label size="24">작성자</label>
          </div>
          <input
            type="text"
            onChange={onChangeHandler}
            placeholder="작성자의 이름을 입력해주세요. (5자 이내)"
            value={post.username }
            name="username"
            maxLength={5}
          />
          <div mg="10px 0">
            <label size="24">소개글</label>
          </div>
          <input
            type="text"
            onChange={onChangeHandler}
            placeholder="제목을 입력해주세요. (50자 이내)"
            value={post.contents}
            name="contents"
            maxLength={50}
          />
          <div mg="10px 0">
            <label size="24">사진</label>
          </div>
          <image    
                //  alt="이미지 미리보기💾"
                 accept="image/*"
                 src={fileImage}
                 rounded={true}
               />
          <input type='file' 
                 multiple="multiple" 
                 name='imgurl' 
                 accept="image/jpg, image/png, image/jpeg"
      onChange={onChangeHandler} 
      />
      
 
        </StMain>
        <button size="large" 
>추가하기</button>
      </StForm>
    </StContainer>
    </Layout>
    
  );


  
   
};

export default PostPage;

const StForm = styled.form`
  width: 100%;
  height: 100%;
  
`;

const StContainer = styled.div`
  height: 100%;
`;

// const Textarea = styled.textarea`
//   width: 100%;
//   border: 1px solid #eee;
//   padding: 12px;
//   font-size: 14px;
// `;

const StMain = styled.div`
  width: 100%;
`;