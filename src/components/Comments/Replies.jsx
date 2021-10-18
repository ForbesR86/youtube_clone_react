import React from 'react';
import axios from 'axios';
//'http://127.0.0.1:8000/replies/' + commentID + '/'
const Replies = ({commentID}) => {
//Get replies
let repliesList = axios.get('http://127.0.0.1:8000/replies/' + commentID + '/')

      
    if (repliesList) {
        console.log('start reply')
        return (
            <>    
                {repliesList.map(Reply => {
                    return (
                        <dd key={Reply.id}>
                        {Reply.reply}
                        </dd>
                    
                    )
            
                })}
            </>
            

    )}
}
export default Replies;