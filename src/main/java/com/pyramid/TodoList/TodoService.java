package com.pyramid.TodoList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TodoService {
    @Autowired
    private TodoRepository repo;
    public void AddTodo(Todo t){
        t.setComplete(false);

        repo.save(t);
    }

    public Optional<Todo> getTodoByID(id id){
        return repo.findById(id);
    }

    public void updateTodo(id id){
        Todo todo =  getTodoByID(id).get();
        todo.setComplete(true);
        repo.save(todo);
    }
    public List<Todo> findAll(){
        List<Todo> todos = new ArrayList<>();
        List<Todo> allTodos = repo.findAll();
        for (Todo t : allTodos) {
            if (!t.isComplete()){
                todos.add(t);
            }
        }
        return todos;
    }
}
