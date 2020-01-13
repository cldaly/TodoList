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
        t.setComplete(false);

        repo.save(t);
    }
    public void completeTodo(Integer d){

    }
    public Optional<Todo> getTodoByID(Integer id){
        return repo.findById(id);
    }
    public void updateTodo(Integer id){
        Todo todo =  getTodoByID(id).get();
        todo.setComplete(true);
        repo.save(todo);
    }
    public List<Todo> findAll(){
        Todo todo = new Todo(id);
        for(int i=0; todo.isComplete(); i++ ){

        }
        return repo.findAll();
    }
}
