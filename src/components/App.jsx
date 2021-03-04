import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { RecoilRoot, useRecoilSnapshot } from 'recoil';
import List from './List';
import Post from './Post';

const Test = () => {
  return (
    <div>
      <Suspense fallback='Loading'>
        <Router>
          <Route exact path='/' component={List} />
          <Route path='/:id' component={Post} />
        </Router>
      </Suspense>
    </div>
  );
};

const DebugRecoil = () => {
  const snapshot = useRecoilSnapshot();
  useEffect(() => {
    for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
      console.groupCollapsed('NODE: ' + node.key);
      console.group('contents');
      console.log(snapshot.getLoadable(node).contents);
      console.groupEnd();
      console.group('snapshot');
      console.log(snapshot.getLoadable(node));
      console.groupEnd();
      console.groupEnd();
    }
  }, [snapshot]);
  return null;
};

const App = () => {
  return (
    <RecoilRoot>
      <DebugRecoil />
      <Test />
    </RecoilRoot>
  );
};

export default App;
