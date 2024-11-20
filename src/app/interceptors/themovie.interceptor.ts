import { HttpInterceptorFn } from '@angular/common/http';

export const themovieInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMmIyYjU0NGI5ODk0NWIwNDIzNTU0ZGE0ZmY1MjA5YiIsIm5iZiI6MTczMjAyOTk2NS41MTYwMjYzLCJzdWIiOiI1Y2Q3MzIyMDkyNTE0MTExZGVjZjEyODkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.WzPzOoawgQHDvRvHiPWxoPmUDhvpGVD8SAhNELBuWhU';
  const modifiedRequest = req.clone({
    setHeaders: {
      'Authorization': `Bearer ${authToken}`,
      'accept': 'Application/json'
          }
  });

  return next(modifiedRequest);
};
