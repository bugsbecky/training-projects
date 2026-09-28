package com.todoapp.controller;

import com.todoapp.CreateTodoRequest;
import com.todoapp.service.TodoService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/api/todos")
public class TodoController {

    private final TodoService todoService;

    private static final Logger log = LoggerFactory.getLogger(TodoController.class);

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @PostMapping
    public void createTodo(@RequestBody CreateTodoRequest request) {
        log.info("Received POST /api/todos with title: {}", request.getTitle());
        todoService.createTodo(request);
    }
}