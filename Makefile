# Makefile for Colorado Bills Status Tracker

.PHONY: setup build run test clean

setup:
	cp .env.example .env
	pip install -r api/requirements.txt
	pip install -r scraper/requirements.txt
	cd frontend && npm install

build:
	docker-compose build

run:
	docker-compose up

run-dev:
	docker-compose up postgres
	cd api && uvicorn main:app --reload &
	cd frontend && npm start &

test:
	cd api && python -m pytest
	cd frontend && npm test

clean:
	docker-compose down -v
	rm -rf frontend/node_modules
	find . -type d -name __pycache__ -exec rm -r {} +
	find . -type d -name .pytest_cache -exec rm -r {} +
