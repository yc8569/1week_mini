import Layout from '../components/Layout';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { useState } from 'react';




const MyPage = (props) => {


    // const initialState ={
    //     postList:[
    //     {
    //       createdAt: null,
    //       postId:1,
    //       username : "작성자",
    //       contents: "어려워",
    //       file: "",
    //       imgurl:[],
    //     },
    //     {
    //       createdAt: null,
    //         postId:1,    //post 의 주인 아이다
    //         username : "작성자2",       //게시글
    //         contents: "제발",
    //         file: "",
    //         imgurl:[],
    //     },]}


  const { username } = useParams();
//   const navigate = useNavigate();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.postList);
  
  const new_post = posts.filter((post)=> post.username == username);

  console.log(new_post)
 

  const handleChangeState = (event) => {
   
  };

 
  const handleSubmit = (event) => {
    event.preventDefault();
    
    
    // if (comment.title.trim() === '' || comment.content.trim() === '') {
    //   return alert("모든 항목을 입력해주세요.");
    // }

    // dispatch(addComment({ ...comment, 
    //   id: number, createdAt ,todoId: todo_id,
    // }));
    // setcomment(initialState);
    // // dataId.current++;
    // number = number +1;
    
  };

  // useEffect(() => {
  //   dispatch(getTodoByID(id));
  // }, [dispatch, id]);

  return (
    <>
      <Layout>
       
     
      {new_post.map((post)=>
               <MyPageBox>
               <MyPageNo>No. {post.postId} 🎂</MyPageNo>
               <MyPageTitle>{post.username}</MyPageTitle>
               <MyPageContent>{post.contents}</MyPageContent>
               <MyPageContent>{post.createdAt}</MyPageContent>
               </MyPageBox>
      )}

      
          
      </Layout>
    </>
  );
};

const MyPageBox = styled.div`
  width: 500px;
  height: 300px;
  background-color: rgb(226, 228, 240);
  border-radius: 10px;
  margin: 50px auto;
  padding: 50px;
`;

const MyPageNo = styled.div`
  margin-bottom: 10px;
`

const MyPageTitle = styled.div`
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 10px;
`;

const MyPageContent = styled.div`
  font-size: 18px;
`

export default MyPage;

