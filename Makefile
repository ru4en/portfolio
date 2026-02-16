
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
	cd docs && \
	pdflatex -output-directory ../dist -jobname RubenLopes-CV-TX$(DATE) cv.tex && \
	cp ../dist/RubenLopes-CV-TX$(DATE).pdf ../public/cv.pdf && \
	cd ..

cl:
	cd docs && \
	read -p "Enter the company name: " company_name; \
	read -p "Enter the position title: " position_title; \
	read -p "Enter the industry: " industry; \
	read -p "Enter YOUR phone number: " phone_number; \
	pdflatex -output-directory ../dist -jobname "RubenLopes-CL-TX$(DATE)_$$(echo $$company_name | tr ' ' '_')" \
		"\\def\\recipientCompany{$$company_name} \\def\\jobPosition{$$position_title} \\def\\industry{$$industry} \\def\\phoneNumber{$$phone_number} \\input{cl.tex}" && \
	cd ..

cv-clean:
	cd cv && make clean

.PHONY: install dev build compose down test lint