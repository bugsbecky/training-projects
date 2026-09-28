*Start frontend:* npm run dev, Server runs on: http://localhost:5173/

*start backend:* 
1. ./mvnw spring-boot:run
2.in second terminal run:  http://localhost:8080/api/todos
3. press ctrl + link to open web browser

*start/stop docker:*
(in Terminal)
docker stop todo-postgres
docker start todo-postgres
port: 5432
Container: todo-postgres

┌─────────────────────┐         HTTP (JSON)         ┌─────────────────────┐
│  React (port 5173)  │  ─────────────────────────► │ Spring Boot (8080)  │
│  your App.tsx       │  ◄───────────────────────── │  your API           │
└─────────────────────┘                             └──────────┬──────────┘
                                                               │
                                                               ▼
                                                    ┌─────────────────────┐
                                                    │ Database PostgreSQL |
                                                    └─────────────────────┘