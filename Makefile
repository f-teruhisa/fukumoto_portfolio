default: up

init:
	docker-compose build

up:
	mkdir -p tmp/pids
	rm -rf tmp/pids/*
	docker-compose up

yarn:
	docker-compose run --rm web yarn install

ybuild:
	docker-compose run web yarn build
