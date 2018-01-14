import React from 'react';
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router-dom';
import FormBlock from '../index';

describe('<UserList />', () => {
  test('renders', () => {
    const tree = renderer.create(
      <StaticRouter context={{}}>
        <FormBlock />
      </StaticRouter>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
