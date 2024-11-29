# Colorado Legislative Bill Status Tracker

A comprehensive web application for tracking and analyzing Colorado Legislative Bills. This project includes a web scraper, API, database, and frontend dashboard.

## Project Structure

```
bill-status/
├── api/              # FastAPI backend
├── frontend/         # React frontend
├── scraper/         # Python scraper
└── database/        # Database schemas and migrations
```

## Features

- **Web Scraper**
  - Automated bill information collection
  - Periodic updates
  - Error handling and logging

- **REST API**
  - Bill search and filtering
  - Analytics endpoints
  - Export capabilities
  - Complete documentation

- **Frontend Dashboard**
  - Interactive bill search
  - Visual analytics
  - Detailed bill views
  - Export functionality

- **Database**
  - PostgreSQL schema
  - Full-text search
  - Analytics support

## Setup

### Prerequisites

- Python 3.8+
- Node.js 14+
- PostgreSQL 12+
- Chrome/Chromium (for scraper)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/serafinsanchez/bill-status.git
cd bill-status
```

2. Set up the database:
```bash
cd database
psql -U postgres -f schema.sql
```

3. Set up the API:
```bash
cd ../api
python -m venv venv
source venv/bin/activate  # or `venv\Scripts\activate` on Windows
pip install -r requirements.txt
```

4. Set up the frontend:
```bash
cd ../frontend
npm install
```

5. Set up the scraper:
```bash
cd ../scraper
python -m venv venv
source venv/bin/activate  # or `venv\Scripts\activate` on Windows
pip install -r requirements.txt
```

### Configuration

1. Create a `.env` file in the api directory:
```env
DATABASE_URL=postgresql://user:password@localhost:5432/colorado_bills
```

2. Update the API URL in the frontend:
```javascript
// frontend/src/config.js
export const API_URL = 'http://localhost:8000';
```

### Running the Application

1. Start the API:
```bash
cd api
uvicorn main:app --reload
```

2. Start the frontend:
```bash
cd frontend
npm start
```

3. Run the scraper:
```bash
cd scraper
python main.py
```

## API Documentation

Once the API is running, visit `http://localhost:8000/docs` for interactive API documentation.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.