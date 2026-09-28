package com.todoapp.repository;

import com.todoapp.CreateTodoRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

@Repository
public class TodoRepository {

    private static final Logger log = LoggerFactory.getLogger(TodoRepository.class);

    public void save(CreateTodoRequest request) {
        log.info("Repository: saving todo with title: {}", request.getTitle());
    }
}