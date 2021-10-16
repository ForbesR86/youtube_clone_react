import React from 'react';
import like from '../../static/like.gif'
import dislike from '../../static/dislike.gif'

const Comments = ({comments_list, likeComment, dislikeComment}) => {
    
    if (!comments_list) {
        return <div>No Video</div>;
    }
    console.log(comments_list)
    return (
        <ul>
            {comments_list.map(comment => {
                return (
                    <li key={comment.id}>
                        {comment.date} - {comment.comment} <br></br>
                        {comment.likes}<img src={like.gif} alt="Like!" onClick={ () => likeComment(comment.id)}></img>{comment.dislikes}<img src={dislike.gif} alt="Dislike!" onClick={ () => dislikeComment(comment.id)}></img>
            
                    </li>
                )
            })}
</ul>

    )
}
export default Comments;