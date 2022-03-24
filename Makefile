install: #установка зависимостей для первого запуска
	npm ci

publish: #подготовка пакета к публикации (локально)
	npm publish --dry-run

link: #установка пакета в систему
	npm link

lint: #проверка линтером
	npx eslint .

test: #запуск тестов
	NODE_OPTIONS=--experimental-vm-modules npx jest

test-coverage: #покрытие тестами
	NODE_OPTIONS=--experimental-vm-modules npx jest --coverage --coverageProvider=v8