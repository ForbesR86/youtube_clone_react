import React from 'react';
import axios from 'axios';

const Replies = ({commentid}) => {
//Get replies
    await axios
      .get('http://127.0.0.1:8000/replies/')
      .then(res => {
        const replylist = res.data;
      })
      .catch(function(error) {
        console.log(error);
      });
    console.log(replylist)
      

    return (
        <>    
                {replylist.map(comment => {
                    return (
                        <dd key={comment.id}>
                        {comment.reply}
                        </dd>
        </>
                )

            })}

    )
}
export default Comments;