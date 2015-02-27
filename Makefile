
default: test

test: node_modules $(wildcard test/*.js)
	@node_modules/.bin/mocha test/test.js

clean:
	@rm -rf build.js ager.js ager.min.js components node_modules

node_modules: package.json
	@npm install

bundle: index.js
	@duo --standalone ager --stdout index.js > ager.js
	@uglifyjs ager.js --mangle --compress --output ager.min.js

.PHONY: clean test
