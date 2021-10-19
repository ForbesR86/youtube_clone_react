import React, { useState, useEffect } from "react";
import axios from 'axios';
//'http://127.0.0.1:8000/replies/' + commentID + '/'
const Replies = ({commentID}) => {
// Get replies
// let repliesList = [];
// axios.get('http://127.0.0.1:8000/replies/' + commentID + '/')
// .then(response => {
//      repliesList = response.data
//     })
// .catch(function(error) {
//    console.log(error);
// })
// console.log(commentID);
// console.log(repliesList)

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
    console.log(commentID + 'no child')
}
console.log(responseData)
    return (
            <><ul>    
                {responseData.map(Reply => {
                    return (
                        <li key={Reply.id}>
                        {Reply.reply}
                        </li>
                    
                    )
            
                })}

            </ul></>
            

    )
}

export default Replies;

<ul>
      <li>Black tea</li>
      <li>Green tea</li>
    </ul>