```javascript
// app/middleware.js

export function middleware(req) {
  if (req.nextUrl.pathname.startsWith('/dynamic')){
    // Perform middleware logic here
    // ...
  }
}

export const config = {
  matcher: ['/dynamic/:id'],
};

```