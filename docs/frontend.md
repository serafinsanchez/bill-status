# Frontend Documentation

## Overview

The frontend is a React-based application that provides an interactive interface for viewing and analyzing Colorado legislative bills.

## Components

### BillCard
Displays individual bill information in a card format.

```jsx
<BillCard 
  bill={billData}
  onClick={handleBillClick}
/>
```

Props:
- `bill`: Bill object containing details
- `onClick`: Handler for card click

### SearchFilters
Provides filtering options for bill searches.

```jsx
<SearchFilters
  searchQuery={query}
  setSearchQuery={setQuery}
  selectedStatus={status}
  setSelectedStatus={setStatus}
  selectedChamber={chamber}
  setSelectedChamber={setChamber}
/>
```

### StatsChart
Visualizes bill statistics using Recharts.

```jsx
<StatsChart data={monthlyStats} />
```

## State Management

The application uses React hooks for state management:

```javascript
const [bills, setBills] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState('');
```

## API Integration

API calls are made using the fetch API:

```javascript
const fetchBills = async () => {
  try {
    const response = await fetch(`${API_URL}/bills/search`);
    const data = await response.json();
    setBills(data.results);
  } catch (err) {
    setError('Failed to fetch bills');
  }
};
```

## Styling

The application uses Tailwind CSS for styling. Custom styles can be added in:

```
src/styles/custom.css
```

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Development

1. Start the development server:
```bash
npm start
```

2. Run tests:
```bash
npm test
```

3. Run linting:
```bash
npm run lint
```

## Deployment

The application can be deployed using:

```bash
docker-compose up frontend
```

Or deployed to AWS:

```bash
aws s3 sync build/ s3://your-bucket
```