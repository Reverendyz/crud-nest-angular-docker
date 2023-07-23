# Docker NestJS and Angular

## Prerequisites

- [docker](https://www.docker.com/)

## Running

```shell
docker compose up [-d]
```

## Testing

```shell
# list 
curl localhost:3000/gatos

# add
curl -X POST localhost:3000/gatos \
    -d '{"nome": "<a cat's name>", "idade": 42, "raca": "<breed>"}'

# update
curl -X PUT localhost:3000/gatos/<id> \
    -d '{"nome": "<an updated cat's name>", "idade": 4, "raca": "<updated breed>"}'

# deletion
curl -X DELETE localhost:3000/gatos/<id>
```
