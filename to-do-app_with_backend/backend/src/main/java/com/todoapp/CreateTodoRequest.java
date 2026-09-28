package com.todoapp;

import jakarta.validation.constraints.NotBlank;

public record CreateTodoRequest(@NotBlank String title) {

	public String getTitle() {
		return title;
	}
}

