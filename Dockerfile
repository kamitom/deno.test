FROM hayd/alpine-deno:1.0.0
COPY begin.ts ./
ENTRYPOINT [ "deno", "run", "--allow-net", "begin.ts" ]