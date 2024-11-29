# Database Documentation

## Schema Overview

### Bills Table
```sql
CREATE TABLE bills (
    id SERIAL PRIMARY KEY,
    bill_number VARCHAR(20) UNIQUE NOT NULL,
    chamber chamber NOT NULL,
    title TEXT NOT NULL,
    status bill_status NOT NULL,
    summary TEXT,
    full_text_url TEXT,
    url TEXT NOT NULL,
    introduced_date DATE,
    last_action_date DATE,
    last_action_text TEXT,
    sponsors JSONB,
    committees JSONB,
    fiscal_notes JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    version INTEGER DEFAULT 1
);
```

## Indexes

```sql
CREATE INDEX idx_bills_bill_number ON bills(bill_number);
CREATE INDEX idx_bills_status ON bills(status);
CREATE INDEX idx_bills_last_action_date ON bills(last_action_date);
```

## Full-Text Search

```sql
CREATE INDEX idx_bills_title_gin ON bills USING GIN (to_tsvector('english', title));
CREATE INDEX idx_bills_summary_gin ON bills USING GIN (to_tsvector('english', summary));
```

## Functions

### Search Bills
```sql
CREATE OR REPLACE FUNCTION search_bills(
    search_query TEXT,
    status_filter bill_status DEFAULT NULL,
    chamber_filter chamber DEFAULT NULL,
    date_start DATE DEFAULT NULL,
    date_end DATE DEFAULT NULL
) RETURNS TABLE (...) AS $$
```

## Migrations

Migrations are handled using Alembic:

```bash
alembic upgrade head
```

## Backup and Restore

### Backup
```bash
pg_dump -U user -d colorado_bills > backup.sql
```

### Restore
```bash
psql -U user -d colorado_bills < backup.sql
```

## Maintenance

### Vacuum
```sql
VACUUM ANALYZE bills;
```

### Update Statistics
```sql
ANALYZE bills;
```

## Performance Tuning

### Connection Pool
```python
engine = create_engine(
    DATABASE_URL,
    pool_size=20,
    max_overflow=0
)
```

### Query Optimization
```sql
EXPLAIN ANALYZE SELECT * FROM bills WHERE status = 'Signed by Governor';
```

## Monitoring

### Active Queries
```sql
SELECT * FROM pg_stat_activity WHERE state = 'active';
```

### Table Statistics
```sql
SELECT schemaname, relname, n_live_tup, n_dead_tup
FROM pg_stat_user_tables;
```