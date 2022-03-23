install: #установка зависимостей для первого запуска
	npm ci

publish: #подготовка пакета к публикации (локально)
	npm publish --dry-run

link: #установка пакета в систему
	npm link

lint: #проверка линтером
	npx eslint .

test: #запуск тестов
	npx jest NODE_OPTIONS=--experimental-vm-modules