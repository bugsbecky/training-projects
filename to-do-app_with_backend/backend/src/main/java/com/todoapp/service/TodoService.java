package com.todoapp.service;

import com.todoapp.CreateTodoRequest;
import com.todoapp.repository.TodoRepository;
import org.springframework.stereotype.Service;

@Service
public class TodoService {

    private final TodoRepository todoRepository;

    public TodoService(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    public void createTodo(CreateTodoRequest request) {
        todoRepository.save(request);
    }
}