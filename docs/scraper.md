# Scraper Documentation

## Overview

The scraper component automatically collects bill information from the Colorado Legislative website.

## Usage

### Basic Usage

```python
from colorado_bills_scraper import ColoradoBillScraper

scraper = ColoradoBillScraper(headless=True)
scraper.scrape_all_bills()
```

### Scheduled Updates

```python
from apscheduler.schedulers.blocking import BlockingScheduler

scheduler = BlockingScheduler()
scheduler.add_job(scraper.update_bill_database, 'interval', hours=24)
scheduler.start()
```

## Configuration

Environment variables:
```env
DATABASE_URL=postgresql://user:password@localhost:5432/colorado_bills
SCRAPER_INTERVAL=86400
CHROMEDRIVER_PATH=/usr/local/bin/chromedriver
```

## Components

### ColoradoBillScraper

Main scraper class that handles web scraping operations.

```python
class ColoradoBillScraper:
    def __init__(self, headless=True):
        self.options = webdriver.ChromeOptions()
        if headless:
            self.options.add_argument('--headless')
```

### BillsDatabaseManager

Handles database operations for scraped bills.

```python
class BillsDatabaseManager:
    def __init__(self, db_url):
        self.engine = create_engine(db_url)
```

## Error Handling

The scraper includes comprehensive error handling:

```python
try:
    bill_info = scraper.get_bill_details(bill_number)
except ScraperException as e:
    logger.error(f"Error scraping bill {bill_number}: {e}")
except DatabaseException as e:
    logger.error(f"Error saving bill {bill_number}: {e}")
```

## Logging

Logging configuration:

```python
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('scraper.log'),
        logging.StreamHandler()
    ]
)
```

## Testing

Run tests using pytest:

```bash
python -m pytest tests/
```

## Deployment

Deploy using Docker:

```bash
docker-compose up scraper
```

Or as a standalone service:

```bash
python main.py --mode=full
```