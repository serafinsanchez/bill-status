import React from 'react';
import { render, screen } from '@testing-library/react';
import StatsChart from '../components/StatsChart';

const mockData = [
  {
    month: '2023-01',
    introduced_count: 10,
    signed_count: 5
  },
  {
    month: '2023-02',
    introduced_count: 15,
    signed_count: 8
  }
];

describe('StatsChart', () => {
  it('renders chart title', () => {
    render(<StatsChart data={mockData} />);
    expect(screen.getByText('Monthly Bill Statistics')).toBeInTheDocument();
  });

  // Note: Testing Recharts components requires more complex setup
  // This is a basic test to ensure the component renders
  it('renders without crashing', () => {
    expect(() => render(<StatsChart data={mockData} />)).not.toThrow();
  });
});