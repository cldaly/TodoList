package com.pyramid.TodoList.Controller;

import com.pyramid.TodoList.Todo;
import com.pyramid.TodoList.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TodoController {
    @Autowired
    private TodoService ts;

    @PostMapping("/addTodo")
    public void addTodo(@RequestBody Todo todo) {
        ts.AddTodo(todo);

}
    @GetMapping("/getTodo")
    public List<Todo> getTodos(){
        return ts.findAll();
}
}
