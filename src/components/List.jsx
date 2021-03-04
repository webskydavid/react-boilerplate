import React from 'react';
import { Link } from 'react-router-dom';
import { selector, useRecoilValue } from 'recoil';

const posts = selector({
  key: 'posts',
  get: async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return response.json();
  },
});

function List() {
  const list = useRecoilValue(posts);

  return (
    <div>
      <ul>
        {list.map((post) => (
          <li key={post.id}>
            {post.title}
            <Link to={`/${post.id}`}>Go to</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
