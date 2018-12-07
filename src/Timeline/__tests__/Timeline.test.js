import React from 'react';
import render from '../../_utils/tests/render';
import Timeline from '../Timeline';

it('renders Timeline correctly', () => {
  const { container } = render(
    <Timeline>
      <Timeline.Step label="Step one">
        <Timeline.StepDetail>Step Detail one</Timeline.StepDetail>
      </Timeline.Step>
      <Timeline.Step label="Step two">
        <Timeline.StepDetail>Step Detail two</Timeline.StepDetail>
      </Timeline.Step>
      <Timeline.Step label="Step three">
        <Timeline.StepDetail>Step Detail three</Timeline.StepDetail>
      </Timeline.Step>
    </Timeline>
  );
  expect(container).toMatchSnapshot();
});
