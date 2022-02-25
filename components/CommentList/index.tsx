import {FC} from "react"
import CommentDisplay from "../CommentDisplay"
import React from "react"

const CommentList: FC = () => {
    return (
        <>
        {comments.map((comment) => (<CommentDisplay comment={comment} key={comment._id}/> ))
       
    } </>)
  

}


export default CommentList