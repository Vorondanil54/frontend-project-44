install:
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

compile:
	npm link

lint:
	npx eslint .

fix:
	npx eslint --fix .