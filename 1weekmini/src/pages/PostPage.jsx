import React, { useEffect, useState } from "react";
import styled from "styled-components";

const PostPage = () => {

  const [post, setpost] = useState({
    username: "",
    title: "",
    picture: "",
    
  });

  return (
    <StContainer>
      <StForm
        // onSubmit={(event) => {
        //   event.preventDefault();
        //   if (
        //     todo.body.trim() === "" ||
        //     todo.username.trim() === "" ||
        //     todo.title.trim() === ""
        //   ) {
        //     return alert("모든 항목을 입력해주세요.");
        //   }
      
        // }}
      >
        <StMain>
          <div mg="10px 0">
            <text size="24">작성자</text>
          </div>
          <input
            type="text"
            // onChange={onChangeHandler}
            placeholder="작성자의 이름을 입력해주세요. (5자 이내)"
            value={post.username }
            name="username"
            maxLength={5}
          />
          <div mg="10px 0">
            <text size="24">소개글</text>
          </div>
          <input
            type="text"
            // onChange={onChangeHandler}
            placeholder="제목을 입력해주세요. (50자 이내)"
            value={post.title}
            name="title"
            maxLength={50}
          />
          <div mg="10px 0">
            <text size="24">사진</text>
          </div>
          <input type="image" src="/examples/images/submit_icon.png" alt="제출버튼" />
        </StMain>
        <button size="large">추가하기</button>
      </StForm>
    </StContainer>
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
