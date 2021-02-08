#!/bin/sh

node_modules/.bin/ng build --prod --source-map=false --baseHref="https://ceschalmers.se"
echo "ceschalmers.se" > docs/CNAME

