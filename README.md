# Next.js 15 App Router - Dynamic Route Middleware Issue

This repository demonstrates a potential issue with dynamic routes and middleware in Next.js 15's App Router.  The bug involves unexpected behavior when using middleware with routes containing dynamic segments.

## Bug Description

The middleware is not correctly handling the dynamic route segment.  The middleware is triggered only for the exact match with the wildcard characters in the route, but not for different values. 

## How to Reproduce

1. Clone this repository.
2. Run `npm install`
3. Run `npm run dev`
4. Notice the unexpected behaviour in the browser. 

## Solution

The solution involves careful handling of the dynamic route segment within the middleware function and ensuring the request path is properly checked.