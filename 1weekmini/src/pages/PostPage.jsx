import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { addPost } from "../redux/modules/post";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const PostPage = () => {
  const navigate = useNavigate();

  const initialState ={

    username : "",
    contents: "",
    likeCount: 0,
    // postingImage: enctype="multipart/form-data",
    file: "",
    createdAt: null,
  };


  const [post, setPost] = useState(initialState);
  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    // const formData = new FormData();
    // formData.append('image', event.target.files[0]);
    // console.log(event.target)
    setPost({
      ...post,
      [event.target.name]: event.target.value,
    })
    // console.log(formData)
    
}



const handleSubmit =(event)=>{
  event.preventDefault();
  const createdAt = new Date().getTime();
  // const formData = new FormData();
  // formData.append({ [e.target.name]: e.target.value })
  // formData.append('file', e.target.files[0]);
  
  // if (post.title.trim() === '' || post.contents.trim() === '') 
  // return(alert("빈칸입니다"));
  dispatch(addPost({...post, createdAt,}));
  setPost(initialState);
  navigate('/');
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
          <input type='file' 
           multiple="multiple" 
               name='file' 
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