import React from 'react';
import { render, screen } from '@testing-library/react';
import List from '../components/List';

describe('List component', () => {
  test('render List component', () => {
    render(<List />)
    expect(screen.queryByRole('list')).toBeNull()
  })
});