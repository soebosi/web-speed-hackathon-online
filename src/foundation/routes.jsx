import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import loadable from '@loadable/component'

const Entrance = loadable(async () => {
  const { Entrance } = await import('../pages/entrance');
  return Entrance;
});
const BlogHome = loadable(async () => {
  const { BlogHome } = import('../pages/blog_home');
  return BlogHome;
});
const Entry = loadable(async () => {
  const { Entry } = import('../pages/entry');
  return Entry;
});
const NotFound = loadable(async () => {
  const { NotFound } = import('../pages/not_found');
  return NotFound;
});

export function Routes() {
  const error = useSelector((state) => state.error);

  if (error.error !== undefined) {
    return <NotFound />;
  }

  return (
    <Switch>
      <Route exact path="/">
        <Entrance />
      </Route>
      <Route exact path="/:blogId">
        <BlogHome />
      </Route>
      <Route exact path="/:blogId/entry/:entryId">
        <Entry />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
}
