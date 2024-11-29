import pytest
from unittest.mock import Mock, patch
from ..colorado_bills_scraper import ColoradoBillScraper

@pytest.fixture
def mock_driver():
    with patch('selenium.webdriver.Chrome') as mock:
        yield mock

def test_scraper_initialization(mock_driver):
    scraper = ColoradoBillScraper(headless=True)
    assert scraper.base_url == "https://leg.colorado.gov"

@patch('selenium.webdriver.Chrome')
def test_get_bill_numbers(mock_driver):
    scraper = ColoradoBillScraper(headless=True)
    mock_driver.find_elements.return_value = [
        Mock(text='HB23-1001'),
        Mock(text='SB23-001')
    ]
    
    bill_numbers = scraper.get_bill_numbers()
    assert len(bill_numbers) == 2
    assert 'HB23-1001' in bill_numbers

@patch('selenium.webdriver.Chrome')
def test_get_bill_details(mock_driver):
    scraper = ColoradoBillScraper(headless=True)
    
    # Mock the necessary driver methods
    mock_driver.find_element.return_value.text = 'Test Bill Title'
    
    bill_info = scraper.get_bill_details('HB23-1001')
    assert bill_info is not None
    assert bill_info['bill_number'] == 'HB23-1001'