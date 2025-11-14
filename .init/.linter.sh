#!/bin/bash
cd /home/kavia/workspace/code-generation/speed-racer-challenge-192470-192479/frontend_web
npm run lint 
$ESLINT_EXIT_CODE
npm run build
BUILD_EXIT_CODE=$?
if [ $ESLINT_EXIT_CODE -ne 0 ] || [ $BUILD_EXIT_CODE -ne 0 ]; then
  exit 1
fi

