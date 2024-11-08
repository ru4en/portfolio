FROM golang:alpine AS builder

WORKDIR /app

COPY backend/go.mod .
COPY backend/go.sum .

RUN go mod download

COPY backend/ .

ENV CGO_ENABLED=0
RUN go build -o portfolio.rubenlopes.uk .

FROM alpine:latest

COPY --from=builder /app/portfolio.rubenlopes.uk /portfolio.rubenlopes.uk

RUN chmod +x /portfolio.rubenlopes.uk

CMD ["/portfolio.rubenlopes.uk"]
