
install:
	npm install

dev:
	npm run dev

build:
	npm run build

compose:
	docker-compose up -d

down:
	docker-compose down

test:
	npm run test

lint:
	npm run lint

clean:
	rm -rf node_modules

watch:
	npm run watch


# CV

cv:
	cd cv && make

cv-clean:
	cd cv && make clean

.PHONY: install dev build compose down test lint