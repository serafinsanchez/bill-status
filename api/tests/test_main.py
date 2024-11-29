import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from ..main import app
from ..database import Base, get_db

TEST_DATABASE_URL = "postgresql://test_user:test_password@localhost:5432/test_colorado_bills"

engine = create_engine(TEST_DATABASE_URL)
TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

@pytest.fixture
def test_db():
    Base.metadata.create_all(bind=engine)
    try:
        db = TestingSessionLocal()
        yield db
    finally:
        db.close()
        Base.metadata.drop_all(bind=engine)

@pytest.fixture
def client(test_db):
    def override_get_db():
        try:
            yield test_db
        finally:
            test_db.close()
    
    app.dependency_overrides[get_db] = override_get_db
    return TestClient(app)

def test_read_bills(client):
    response = client.get("/bills/search")
    assert response.status_code == 200
    data = response.json()
    assert "total" in data
    assert "results" in data

def test_get_bill_details(client):
    response = client.get("/bills/HB23-1001")
    assert response.status_code == 404  # Assuming empty test database

def test_get_bill_statistics(client):
    response = client.get("/bills/statistics/status")
    assert response.status_code == 200
    data = response.json()
    assert "statistics" in data