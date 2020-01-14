package com.pyramid.TodoList.Controller;

import com.pyramid.TodoList.Todo;
import com.pyramid.TodoList.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
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
}
