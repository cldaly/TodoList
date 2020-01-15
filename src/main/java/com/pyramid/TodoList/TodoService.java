package com.pyramid.TodoList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TodoService {
    @Autowired
    private TodoRepository repo;
    public void AddTodo(Todo t){
        repo.save(t);
    }

    public Optional<Todo> getTodoByID(String id){
        return repo.findById(id);
    }
public void deleteTodo(String id){
        repo.deleteById(id);

}
    public void updateTodo(String id){
        Todo todo =  getTodoByID(id).get();
        todo.setComplete(true);
        repo.save(todo);
    }
    public Optional<List<Todo>> findAll(){
        return repo.findByIsCompleteFalse();
    }
    public Optional<List<Todo>> findAllComplete(){
    	return repo.findByIsCompleteTrue();
    }

}
