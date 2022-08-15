import Layout from '../components/Layout';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { useState } from 'react';




const Detail = () => {


  const { id } = useParams();
//   const navigate = useNavigate();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.postList);

  const new_post = posts.filter((post)=> post.postId == id)[0]
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
       
      <DetailBox>
          <DetailNo>No. {new_post.postId} 🎂</DetailNo>
          <DetailTitle>{new_post.username}</DetailTitle>
          <DetailContent>{new_post.contents}</DetailContent>
          <DetailContent>{new_post.createdAt}</DetailContent>
        </DetailBox>
      </Layout>
    </>
  );
};

const DetailBox = styled.div`
  width: 500px;
  height: 300px;
  background-color: rgb(226, 228, 240);
  border-radius: 10px;
  margin: 50px auto;
  padding: 50px;
`;

const DetailNo = styled.div`
  margin-bottom: 10px;
`

const DetailTitle = styled.div`
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 10px;
`;

const DetailContent = styled.div`
  font-size: 18px;
`

export default Detail;
