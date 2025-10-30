#!/usr/bin/env bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Start the frontend dev server in the background
pnpm dev &
# Get the process ID of the background server
VITE_PID=$!

# Function to clean up the background process on script exit
cleanup() {
  echo "Shutting down the dev server..."
  kill $VITE_PID
}

# Trap the EXIT signal to run the cleanup function
trap cleanup EXIT

# Wait for the server to be ready.
echo "Waiting for frontend dev server to start on http://localhost:1420..."
while ! curl -s http://localhost:1420 > /dev/null; do
  sleep 1
done
echo "Frontend dev server is ready!"

# Now that the server is ready, start the tauri app
pnpm exec tauri dev
