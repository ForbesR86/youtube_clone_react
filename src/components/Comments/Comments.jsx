import React from 'react';
import like from '../../static/like.png';
import dislike from '../../static/dislike.png';

const Comments = ({comments_list, replies, likeComment, dislikeComment}) => {
    
    if (!comments_list) {
        return <div>No Video</div>;
    }
    console.log(comments_list)
    console.log(replies)
 
    return (
        <dl>
            {comments_list.map(comment => {
                return (
                    <><dt key={comment.id}>
                        {comment.comment} <br></br>
                        {comment.likes}<img src={like} alt="Like!" height="25" width="25" onClick={() => likeComment(comment.id)}></img>
                        {comment.dislikes}<img src={dislike} alt="Dislike!" height="20" width="20" onClick={() => dislikeComment(comment.id)}></img>
                    </dt>
                        {replies.filter(reply => reply.commentid === comment.id).map(replycomment => (
                        <dd>
                        {replycomment}
                        </dd>
                        ))}
                        </>
                )

            })}
        </dl>

    )
}
export default Comments;