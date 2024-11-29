import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SearchFilters from '../components/SearchFilters';

describe('SearchFilters', () => {
  const mockProps = {
    searchQuery: '',
    setSearchQuery: jest.fn(),
    selectedStatus: '',
    setSelectedStatus: jest.fn(),
    selectedChamber: '',
    setSelectedChamber: jest.fn()
  };

  it('renders all filter inputs', () => {
    render(<SearchFilters {...mockProps} />);
    
    expect(screen.getByPlaceholderText('Search bills...')).toBeInTheDocument();
    expect(screen.getByRole('combobox', { name: /status/i })).toBeInTheDocument();
    expect(screen.getByRole('combobox', { name: /chamber/i })).toBeInTheDocument();
  });

  it('calls setter functions when inputs change', () => {
    render(<SearchFilters {...mockProps} />);
    
    fireEvent.change(screen.getByPlaceholderText('Search bills...'), {
      target: { value: 'test query' }
    });
    expect(mockProps.setSearchQuery).toHaveBeenCalledWith('test query');

    fireEvent.change(screen.getByRole('combobox', { name: /status/i }), {
      target: { value: 'Signed by Governor' }
    });
    expect(mockProps.setSelectedStatus).toHaveBeenCalledWith('Signed by Governor');
  });
});