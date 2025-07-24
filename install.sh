#!/bin/bash
set -e

if [ ! -d node_modules ]; then
  echo "Installing Node dependencies..."
  npm install
else
  echo "Node dependencies already installed."
fi

echo "Install script complete."
