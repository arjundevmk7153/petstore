# Makefile
ENV ?= .env.staging
REPORT_PORT ?= 8080
# Target to install dependencies
install:
	npm install

# Target to run tests in staging environment
test-staging:
	npm run test-staging

# Target to run tests in local environment
test-local:
	npm run test-local

# Target to stop the Docker container
docker-stop:
	@docker stop $$(docker ps -q) 2>/dev/null || true
	@docker rm $$(docker ps -aq) 2>/dev/null || true

# Target to build the Docker image
docker-build:
	docker build -t pet .

# Target to run the tests in Docker
docker-run:
	docker run --rm --env-file $(ENV) -e REPORT_PORT=$(REPORT_PORT) -p $(REPORT_PORT):$(REPORT_PORT) pet $(ENV)

# Target to build and run the Docker container
pet-test-staging: docker-stop docker-build
	$(MAKE) docker-run ENV=.env.staging REPORT_PORT=$(REPORT_PORT)

pet-test-local: docker-stop docker-build
	$(MAKE) docker-run ENV=.env.local REPORT_PORT=$(REPORT_PORT)