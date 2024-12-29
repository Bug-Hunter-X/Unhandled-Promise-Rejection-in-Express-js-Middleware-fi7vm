# Unhandled Promise Rejection in Express.js Middleware

This repository demonstrates a common error in Express.js applications: unhandled promise rejections in asynchronous middleware.  When an asynchronous operation within a route handler throws an error, and that error isn't properly caught, the entire server can crash.

## The Problem

The `bug.js` file shows an Express.js application with a route handler that uses a promise.  The `someAsyncOperation` function simulates an asynchronous operation that randomly either resolves or rejects with an error. If the operation rejects, the error isn't handled properly, causing the server to crash.

## The Solution

The `bugSolution.js` file demonstrates how to fix this problem.  By wrapping the asynchronous operation in a `try...catch` block and using `next(err)` to properly handle errors, the server can continue running even if an error occurs in the asynchronous code.

## How to Run

1. Clone this repository.
2. Navigate to the repository directory.
3. Run `npm install` to install the dependencies.
4. Run `node bug.js` to run the buggy application (observe the crash).
5. Run `node bugSolution.js` to run the corrected application (observe the graceful error handling).