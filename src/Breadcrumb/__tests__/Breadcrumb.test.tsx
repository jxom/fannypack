import * as React from 'react';
import render from '../../_utils/tests/render';
import Breadcrumb from '../Breadcrumb';

describe('Breadcrumb', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Breadcrumb>
        <Breadcrumb.Step text="Home" />
        <Breadcrumb.Step text="Breadcrumb" />
        <Breadcrumb.Step isCurrent text="Basic Usage" />
      </Breadcrumb>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  describe('with custom separationColor', () => {
    it('renders correctly', () => {
      const { container } = render(
        <Breadcrumb separationColor="success">
          <Breadcrumb.Step text="Home" />
          <Breadcrumb.Step text="Breadcrumb" />
          <Breadcrumb.Step isCurrent text="Basic Usage" />
        </Breadcrumb>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
