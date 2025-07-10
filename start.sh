#!/bin/sh

# Use first argument as env file; default to ".env"
ENV=${1:-.env}

# Use REPORT_PORT env variable or default to 8080
REPORT_PORT=${REPORT_PORT:-8081}

echo "Running tests with $ENV"

echo "Serving report on port $REPORT_PORT"

# Run tests with the given env file
npx dotenv -e "$ENV" -- cucumber-js

# Then start the server to serve report
http-server ./reports -p $REPORT_PORT -c-1
