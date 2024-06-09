import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Postpage = ({ editTitle, seteditTitle, editBody, seteditBody, items , handleChange , handleDelete }) => {
  const { id } = useParams();
  const post = items.find((item) => item.id === parseInt(id));

  useEffect(() => {
    if (post) {
      seteditTitle(post.title);
      seteditBody(post.body);
    }
  }, [post, seteditTitle, seteditBody]);

 
  if (!post) return <p>Post not found</p>;

  return (
    <>
      <form  className="post-form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={editTitle}
          onChange={(e) => seteditTitle(e.target.value)}
        />
        <textarea
          value={editBody}
          onChange={(e) =>  seteditBody(e.target.value)}
        />
        <button type="submit" onClick={() => handleChange(post.id)}>Save</button>
        <button  onClick={() => handleDelete(post.id)}>Delete</button>

      </form>
    </>
  );
};

export default Postpage;
