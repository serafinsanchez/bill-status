import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import BillCard from '../components/BillCard';

const mockBill = {
  bill_number: 'HB23-1001',
  title: 'Test Bill',
  status: 'Signed by Governor',
  summary: 'Test summary',
  last_action_text: 'Test action',
  last_action_date: '2023-11-29'
};

describe('BillCard', () => {
  it('renders bill information correctly', () => {
    render(<BillCard bill={mockBill} onClick={() => {}} />);
    
    expect(screen.getByText(mockBill.bill_number)).toBeInTheDocument();
    expect(screen.getByText(mockBill.title)).toBeInTheDocument();
    expect(screen.getByText(mockBill.status)).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<BillCard bill={mockBill} onClick={handleClick} />);
    
    fireEvent.click(screen.getByText(mockBill.bill_number));
    expect(handleClick).toHaveBeenCalledWith(mockBill);
  });
});