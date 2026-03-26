#!/bin/bash
cd /home/kavia/workspace/code-generation/fraud-risk-scoring--investigation-platform-for-insurance-claims-104-2236/FrontendReact
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

