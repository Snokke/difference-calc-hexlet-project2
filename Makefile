install:
	npm install

run:
	npx babel-node -- 'src/bin/gendiff.js'

publish:
	npm publish

lint:
	npx eslint "src/**/*.js"

build:
	rm -rf dist
	npm run build