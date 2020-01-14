package com.pyramid.TodoList;

import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface TodoRepository extends CrudRepository<Todo, String> {
    public Optional<List<Todo>> findAllByCompleteFalse();
}
