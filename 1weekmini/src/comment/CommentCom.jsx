import React, { useState, useRef }  from "react";
import apis from "../api/index";
import MainPage from "../pages/MainPage";
import axios from "axios";
import { useEffect } from "react";
import { getCookie } from '../shared/Cookie';
import styled from "styled-components";

const CommentCom =({id})=>{
    const accessToken = getCookie('token');
    const comId = id;  
    // console.log(comId);  // id 들이 다넘어옴

    // const ref = useRef(null);

    
    const [comments, setComments] = useState([]);
    // console.log(comments);
    const fetchComments = async () => {
        const  data  = await axios.get(`http://3.35.131.44/api/post/${comId}`,{headers:{
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,}
        });
        setComments(data.data.data.comment);
        // console.log(data.data.data.comment);

        // try {
        //     const response = await apis.getComments({
        //     //   username: Username,
        //     //   password: Password,
        //     });
        //     console.log(response);
        //     alert("댓글 성공");
        //   } catch (error) {
        //     alert("댓글 다시시도");
        //   }
    };

    const delComment = async (commentId) => {
        const del = await axios.delete(`/api/post/${comId}/${commentId}`,{headers:{
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,}
            })
            
            .then(
                window.location.replace('/main')
                )
            console.log(del)
    };
    
    // const [text, setText] = useState();
    // const [commetPut, setCommentPut] = useState(false);

    // const editOn = () => {
    //     setCommentPut(true);
    // };
    // const handleChange = (e) => {
    //     setText(e.target.value);
    // };
    // const handleKeyDwon = (e) => {
    //     if(e.key === 'Enter') {
    //         setCommentPut(!commetPut);
    //     };
    // }
    // const putComment = async (commentId) => {
    //     const del = await axios.delete(`/api/post/${comId}/${commentId}`,{headers:{
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${accessToken}`,}
    //         })
    //         .catch
    //         .then(
    //             window.location.replace('/')
    //             )
    //         console.log(del)
    // };
    

      useEffect(() => {
        fetchComments();
      }, []);

    return (
        <>
            <div>
                {comments.map((comment)=>{
                    return(

                        <Box key={comment.commentId}>
                            <div key={comment.commentId}>
                            <div key={comment.commentId}>
                            <div> {comment.author}</div>  
                            {/* <h3> {comment.commentId}</h3>   */}
                            <h2> {comment.commentContent}</h2> 
                            
                            <p>{new Date(comment.modifiedAt).toLocaleString()}수정</p>
                            <p>{new Date(comment.createdAt).toLocaleString()}생성</p>
                            <button 
                            onClick={() => {
                                delComment(comment.commentId);
                            }}>삭제</button>
                            {/* <div ref={ref}>
                                {commetPut ? (
                                    
                                    <div key={comment.commentId}>
                                        
                                        <input type="text" 
                                        value={text} 
                                        onChange={(e) => handleChange(e)} 
                                        onKeyDown={handleKeyDwon} />
                                        <button 
                                        // onClick={}
                                        >수정</button> 
                                    </div>
                                ) : (
                                    <button 
                                onClick={() => {
                                    editOn(comment.commentId);
                                    setText(comment.commentContent)
                                    console.log(comment.commentId)
                                }}>수정</button>
                                )} */}
                            {/* </div> */}
                            


                            </div>
                            </div>
                        </Box>
                    )
                })}

                
            </div>
        
    
            
        
        </>
          
        
      );

}
export default CommentCom;


const Box = styled.div`
    border : 1px solid black;
    border-radius: 10px;
    margin : 10px;
    padding : 20px;
`