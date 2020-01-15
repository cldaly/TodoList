package com.pyramid.TodoList.Controller;

import com.pyramid.TodoList.Todo;
import com.pyramid.TodoList.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin (origins = "http://localhost:3000")
public class TodoController {
    @Autowired
    private TodoService ts;

    @PostMapping("/addTodo")
    public void addTodo(@RequestBody Todo todo) {
        ts.AddTodo(todo);

    }
    
    @GetMapping("/getTodo")
    public Optional<List<Todo>> getTodos(){
        return ts.findAll();
    }
    
    @PutMapping("/updateTodo/{id}")
            public void updateTodo(@PathVariable String id){
        ts.updateTodo(id);
    }
    
    @GetMapping("/getCompleted")
    public Optional<List<Todo>> getCompleted(){
    	return ts.findAllComplete();
    }
    
    @DeleteMapping("/deleteTodo/{id}")
    public void deleteTodo(@PathVariable String id){
        ts.deleteTodo(id);
    }
}
