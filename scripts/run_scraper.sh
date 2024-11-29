#!/bin/bash

# Scraper execution script

# Load environment variables
set -a
source ../.env
set +a

# Activate virtual environment
source ../scraper/venv/bin/activate

# Run scraper with specified mode
PYTHONPATH=../scraper python ../scraper/main.py "$@"

deactivate