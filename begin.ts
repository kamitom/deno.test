import { serve } from "https://deno.land/std@0.71.0/http/server.ts";
const s = serve({ port: 8000 });
console.log("http://localhost:8000/");
for await (const req of s) {
  req.respond({ body: "Hello World\ndeno in DOCKER" });
}


// // basic-server.ts
// import { Application } from 'https://deno.land/x/oak/mod.ts';

// const app = new Application();
// const port = 3000;

// app.use((context) => {
//     context.response.body = "<h1>Hello World</h1>";
// });

// console.log("http://localhost:3000/");
// app.listen({ port });



// middleware-server.ts
// import { Application } from 'https://deno.land/x/oak/mod.ts';

// const app = new Application();
// const port = 3000;

// app.use(async (context, next) => {
//     console.log(`${context.request.method} ${context.request.url}`);
//     await next();
//   });
//   app.use((context) => {
//     context.response.body = 'Hello World\ndeno in docker!';
//   });

//   console.log("http://localhost:3000")
// app.listen({ port });
