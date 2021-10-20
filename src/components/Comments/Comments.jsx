import React from 'react';
import ReplyForm from '../ReplyForm/ReplyForm';
import CommentForm from '../CommentForm/CommentForm';
import like from '../../static/like.png';
import dislike from '../../static/dislike.png';
import Replies from '../Replies/Replies'

const Comments = ({video, comments_list, likeComment, dislikeComment, createNewReply, createNewComment, newComment}) => {
    
    if (!comments_list) {
        return <div></div>;
    }
    if (!video) {
        return <div></div>;
    }
    return (
        <div>
            
        <ul className="list-group">
            <li className="list-group-item">
                {comments_list.length} Comments 
            <CommentForm createNewComment={createNewComment} />
            </li>
            
        </ul>

            {comments_list.map(comment => {
                return (
                    <div>
                        &nbsp;
                    <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center" key={comment.id}>
                        
                    
                    <h5 className="mb-1">{comment.comment}</h5>
                    <small >

                    {comment.likes}<img src={like} alt="Like!" height="25" width="25" onClick={ () => likeComment(comment.id)}></img>
                    {comment.dislikes}<img src={dislike} alt="Dislike!" height="20" width="20" onClick={ () => dislikeComment(comment.id)}></img><br></br>
          
                    </small>
                    </li>
                    <li className="list-group-item ">
                        <ul className="list-group">
                        <Replies commentID={comment.id} newComment={newComment}/>
                        <li className="list-group list-group-flush">&nbsp;</li>
                        <ReplyForm commentID={comment.id} createNewReply={createNewReply}/>
                        
                        </ul>
                    </li>
                    </ul>
                    </div>

                )
                    

            })}
    </div>

    )
}
export default Comments;