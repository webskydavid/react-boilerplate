import React, { Suspense, useEffect } from 'react';
import { useRouteMatch } from 'react-router';
import {
  atom,
  useSetRecoilState,
  selectorFamily,
  useRecoilValue,
} from 'recoil';

const currentPostId = atom({
  key: 'CurrentPostId',
  default: '',
});

const postQuery = selectorFamily({
  key: 'postQuery',
  default: '',
  get: () => async ({ get }) => {
    if (get(currentPostId) !== '') {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts/' + get(currentPostId)
      );
      return response.json();
    }
    return '';
  },
});

function Post() {
  let match = useRouteMatch();
  const post = useRecoilValue(postQuery());
  const setCurrentPostId = useSetRecoilState(currentPostId);

  useEffect(() => {
    setCurrentPostId(match.params.id);
  }, [match.params.id, setCurrentPostId]);

  return (
    <Suspense fallback='Loading post...'>
      <pre>{JSON.stringify(post, null, 2)}</pre>
    </Suspense>
  );
}

export default Post;
