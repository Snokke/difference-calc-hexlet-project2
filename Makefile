install:
	npm install

run:
	npx babel-node -- 'src/bin/gendiff.js' 10

publish:
	npm publish

lint:
	npx eslint .

build:
	rm -rf dist
	npm run build

test:
	npm test