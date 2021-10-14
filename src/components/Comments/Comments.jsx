import React from 'react';

const Comments = ({comments_list}) => {
    
    if (!comments_list) {
        return <div>No Comments found</div>;
    }

    return (
        <div>
            <div className='ui embed'>
                comments here
            </div>
        </div>

    )
}
export default Comments;