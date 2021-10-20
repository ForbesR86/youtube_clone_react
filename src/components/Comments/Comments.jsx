import React from 'react';
import ReplyForm from '../ReplyForm/ReplyForm';
import CommentForm from '../CommentForm/CommentForm';
import like from '../../static/like.png';
import dislike from '../../static/dislike.png';
import Replies from '../Replies/Replies'

const Comments = ({comments_list, likeComment, dislikeComment, createNewReply, createNewComment}) => {
    
    if (!comments_list) {
        return <div>No Video</div>;
    }
    return (
        <ul className="list-group">
            <li className="list-group-item">
            <CommentForm createNewComment={createNewComment} />
            </li>
            {comments_list.map(comment => {
                return (
                    <div>
                    <li className="list-group-item d-flex justify-content-between align-items-center" key={comment.id}>
                        
                    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">{comment.comment}</h5>
      <small >

      {comment.likes}<img src={like} alt="Like!" height="25" width="25" onClick={ () => likeComment(comment.id)}></img>
                        {comment.dislikes}<img src={dislike} alt="Dislike!" height="20" width="20" onClick={ () => dislikeComment(comment.id)}></img><br></br>
          
      </small>
    </div>




                    
                        
                    

                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <ul className="list-group">
                        <Replies commentID={comment.id} />
                        <li className="list-group list-group-flush">&nbsp;</li>
                        <ReplyForm commentID={comment.id} createNewReply={createNewReply}/>
                        
                        </ul>
                    </li>
                    </div>

                )
                    

            })}
</ul>

    )
}
export default Comments;