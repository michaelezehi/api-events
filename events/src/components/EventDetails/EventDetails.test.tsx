import { render } from '@testing-library/react';
import EventDetails from './EventDetails';

describe('EventDetails', () => {
  const mockEvent = {
    id: '1',
    name: 'Summer Festival',
    date: '2023-08-15',
    description: 'A fun summer event for all ages.',
    tickets: [
      { name: 'Adult Ticket', type: 'adult', price: 20, bookingFee: 2, availability: 'available' },
      { name: 'Child Ticket', type: 'child', price: 10, bookingFee: 1, availability: 'sold out' }
    ]
  };

  it('should display event details correctly', () => {
    const { getByText } = render(<EventDetails event={mockEvent} />);

    expect(getByText('Summer Festival')).toBeInTheDocument();
    expect(getByText('Date: 2023-08-15')).toBeInTheDocument();

    expect(getByText('Adult Ticket - adult - £20 (Available)')).toBeInTheDocument();
    expect(getByText('Child Ticket - child - £10 (Sold Out)')).toBeInTheDocument();
  });

});
