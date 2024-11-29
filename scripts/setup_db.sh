#!/bin/bash

# Database setup script

# Load environment variables
set -a
source ../.env
set +a

# Create database if it doesn't exist
psql -U $POSTGRES_USER -h localhost -tc "SELECT 1 FROM pg_database WHERE datname = '$POSTGRES_DB'" | grep -q 1 || \
psql -U $POSTGRES_USER -h localhost -c "CREATE DATABASE $POSTGRES_DB"

# Apply schema
psql -U $POSTGRES_USER -h localhost -d $POSTGRES_DB -f ../database/schema.sql

# Create extensions
psql -U $POSTGRES_USER -h localhost -d $POSTGRES_DB -c "CREATE EXTENSION IF NOT EXISTS pg_trgm;"
psql -U $POSTGRES_USER -h localhost -d $POSTGRES_DB -c "CREATE EXTENSION IF NOT EXISTS btree_gin;"

# Create indexes
psql -U $POSTGRES_USER -h localhost -d $POSTGRES_DB -f ../database/indexes.sql

echo "Database setup complete!"