NG_DEPLOY_BASE_HREF = /resistor-color-code-calculator/
GITHUB_BRANCH=$(shell git rev-parse --abbrev-ref HEAD)

## PROJECT

.PHONY: start
start: ## Start the ng development server. The application will automatically reload if you change any of the source files.
	ng serve --serve-path $(NG_DEPLOY_BASE_HREF)

.PHONY: deploy
deploy: ## Deploy current branch to GitHub pages (it will be automatically built in production mode).
	@while [ -z "$$CONTINUE" ]; do read -r -p $ "Deploy current branch \"$(GITHUB_BRANCH)\" on GitHub Pages? [yN] " CONTINUE; done; \
	if [ "$$CONTINUE" = "y" ]; then \
		ng deploy --base-href=$(NG_DEPLOY_BASE_HREF); \
		echo "\033[1;42m! SUCCESS !\033[0m"; \
		echo "Deployed on https://www.jprivet.dev/resistor-color-code-calculator/"; \
	else \
		echo "\033[1;41mCANCELLED\033[0m"; \
	fi; \

.PHONY: prod
prod: ## Build the project (production build)
	ng build --prod

## MAKEFILE

.DEFAULT_GOAL := help
.PHONY: help
help: ## Print self-documented Makefile.
	@echo "------------------------"
	@echo "SELF-DOCUMENTED MAKEFILE"
	@echo "------------------------"
	@grep -E '(^[.a-zA-Z_-]+[^:]+:.*##.*?$$)|(^#{2})' $(MAKEFILE_LIST) \
	| awk 'BEGIN {FS = "## "}; \
		{ \
			split($$1, command, ":"); \
			target=command[1]; \
			description=$$2; \
			# --- space --- \
			if (target=="##") \
				printf "\033[33m%s\n", ""; \
			# --- title --- \
			else if (target=="" && description!="") \
				printf "\033[33m\n%s\n", description; \
			# --- command + description --- \
			else if (target!="" && description!="") \
				printf "\033[32m  %-30s \033[0m%s\n", target, description; \
			# --- do nothing --- \
			else \
				; \
		}'
	@echo
