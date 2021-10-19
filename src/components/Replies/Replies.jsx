import React, { useState, useEffect } from "react";

import axios from 'axios';

//'http://127.0.0.1:8000/replies/' + commentID + '/'

const Replies = ({commentID, createNewReply}) => {

let [responseData, setResponseData] = React.useState([]);
  const fetchData = React.useCallback(() => {
    axios({
      "method": "GET",
      "url": 'http://127.0.0.1:8000/replies/' + commentID + '/',
    })
    .then((response) => {
      setResponseData(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])
  React.useEffect(() => {
    fetchData()
  }, [fetchData])
//let childComments = () => repliesList.filter(c => c.commentid === commentID)

if (responseData) {
    //console.log(commentID + ' no child')
    <></>
}
    return (
        <ul class="list-group list-group-flush">  
                {responseData.map(Reply => {
                    return (
                        <li className="list-group-item" key={Reply.id}>
                        {Reply.reply}
                        </li>
                    
                    )
            
                })}

            </ul>
            
            
  
            

    )
}

export default Replies;