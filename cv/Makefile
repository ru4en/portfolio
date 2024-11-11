DATE := $(shell date +%m%y)
OUTPUT := ../dist/RubenLopes-CV-TX$(DATE).pdf

compose:
	pdflatex -output-directory=../dist cv.tex
	mv ../dist/cv.pdf $(OUTPUT)