import React from 'react';

import Post from './Post';

export default {
  title: 'Components/Post',
  component: Post,
};

const Template = (args) => (
  <Post content='Here is another post.' date='4/13/2021' />
);

export const Default = Template.bind({});
