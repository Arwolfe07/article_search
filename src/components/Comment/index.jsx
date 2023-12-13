import React from 'react';
import moment from 'moment';

// Comment Component Design
const Comment = ({comment}) => {
    const createMarkup = (text) => {
        return { __html: text };
      };
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold">{comment.author}</h3>
            <p className="text-gray-700 text-xs mb-2">Posted on {moment.unix(comment.created_at_i).calendar()}</p>
            <p className="text-gray-700 text-sm" dangerouslySetInnerHTML={createMarkup(comment.text)}/>
           
        </div>
  )
}

export default Comment;