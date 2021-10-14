import React from 'react';


const Comments = ({comments_list}, {videoId}) => {
    
    if (!comments_list) {
        return <div>No Comments found</div>;
    }

    return (
        <ul>
            {comments_list.map(comment => {
                return (
                    <li key={comment.id}>
                        {comment.date} - {comment.comment} 
                    </li>
                )
            })}
</ul>

    )
}
export default Comments;