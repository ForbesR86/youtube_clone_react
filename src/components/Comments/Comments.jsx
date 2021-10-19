import React from 'react';
import ReplyForm from '../ReplyForm/ReplyForm';
import like from '../../static/like.png';
import dislike from '../../static/dislike.png';
import Replies from '../Replies/Replies'

const Comments = ({comments_list, likeComment, dislikeComment, createNewReply}) => {
    
    if (!comments_list) {
        return <div>No Video</div>;
    }
    return (
        <ul className="list-group">
            {comments_list.map(comment => {
                return (
                    <li className="list-group-item" key={comment.id}>
                        {comment.comment} <br></br>
                        {comment.likes}<img src={like} alt="Like!" height="25" width="25" onClick={ () => likeComment(comment.id)}></img>
                        {comment.dislikes}<img src={dislike} alt="Dislike!" height="20" width="20" onClick={ () => dislikeComment(comment.id)}></img><br></br>

                        <ReplyForm commentID={comment.id} createNewReply={createNewReply}/>
                        <Replies commentID={comment.id} />
                    </li>
                )
                    

            })}
</ul>

    )
}
export default Comments;