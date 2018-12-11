import React from 'react';
import render from '../../_utils/tests/render';
import Timeline from '../Timeline';

it('renders Timeline correctly', () => {
  const { container } = render(
    <Timeline>
      <Timeline.Step a11yTitleId="StepTitle1" a11yDescriptionId="StepDescription1">
        <Timeline.StepLabel a11yTitleId="StepTitle1">Step one title</Timeline.StepLabel>
        <Timeline.StepDetail a11yDescriptionId="StepDescription1">Step one details goes here</Timeline.StepDetail>
      </Timeline.Step>
      <Timeline.Step a11yTitleId="StepTitle2" a11yDescriptionId="StepDescription2">
        <Timeline.StepLabel a11yTitleId="StepTitle2">Step two title</Timeline.StepLabel>
        <Timeline.StepDetail a11yDescriptionId="StepDescription2">Step two details goes here</Timeline.StepDetail>
      </Timeline.Step>
      <Timeline.Step a11yTitleId="StepTitle3" a11yDescriptionId="StepDescription3">
        <Timeline.StepLabel a11yTitleId="StepTitle3">Step three title</Timeline.StepLabel>
        <Timeline.StepDetail a11yDescriptionId="StepDescription3">Step three details goes here</Timeline.StepDetail>
      </Timeline.Step>
    </Timeline>
  );
  expect(container).toMatchSnapshot();
});
