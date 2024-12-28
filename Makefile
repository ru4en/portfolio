
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


watch:
	docker compose watch

test:
	echo "No tests yet lol"
lint:
	npm run lint

clean:
	rm -rf node_modules


# CV

cv:
	cd cv && make

cv-clean:
	cd cv && make clean

.PHONY: install dev build compose down test lint