import React, { useState }  from "react";
import apis from "../api/index";
import MainPage from "../pages/MainPage";
import axios from "axios";
import { useEffect } from "react";
import { getCookie } from '../shared/Cookie';
const CommentCom =({id})=>{
    const accessToken = getCookie('token');
    const comId = id;  
// console.log(comId);  // id 들이 다넘어옴
    
    const [comments, setComments] = useState([]);
    // console.log("여기");
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

      useEffect(() => {
        fetchComments();
      }, []);

    return (
        <>
            <div>
                {comments.map((comment)=>{
                    return(
                        <div key={comment.commentId}>
                        <div key={comment.commentId}>
                        <div> 댓글단사람:{comment.author}</div>  
                        {/* <h3> {comment.commentId}</h3>   */}
                        <h2> 다른사람댓글:{comment.commentContent}</h2> 
                        
                        <p>{new Date(comment.modifiedAt).toLocaleString()}수정</p>
                        <p>{new Date(comment.createdAt).toLocaleString()}생성</p>

                        </div>
                               </div>
                    )
                })}

                
            </div>
        
    
            
        
        </>
          
        
      );

}
export default CommentCom;


