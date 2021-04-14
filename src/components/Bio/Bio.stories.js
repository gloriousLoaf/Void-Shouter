import React from 'react';

import Bio from './Bio';

export default {
  title: 'Components/Bio',
  component: Bio,
};

const Template = () => (
  <Bio
    headshot='https://pbs.twimg.com/profile_images/1289388663311175680/oMuZZv67_400x400.jpg'
    name='David Metcalf'
    tagline='web developer'
    role='frontend @ MLtwist.com'
  />
);

export const Default = Template.bind({});
