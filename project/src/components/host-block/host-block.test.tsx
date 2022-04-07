import React from 'react';
import {render, screen} from '@testing-library/react';
import HostBlock from './host-block';

describe('Component: RoomHost', () => {
  const host = {
    id: 1,
    avatarUrl: 'some path',
    isPro: true,
    name: 'Some name',
  };

  it('should render correctly when host is "pro"', () => {
    render(<HostBlock host={host} />);

    const avatar = screen.getByAltText('Host avatar');
    expect(avatar.getAttribute('src')).toBe(host.avatarUrl);
    expect(screen.getByText(host.name)).toBeInTheDocument();

    expect(screen.getByText('Pro')).toBeInTheDocument();
  });

  it('should render correctly when host is not "pro"', () => {
    render(<HostBlock host={{...host, isPro: false}} />);

    expect(screen.queryByText('Pro')).not.toBeInTheDocument();
  });
});
