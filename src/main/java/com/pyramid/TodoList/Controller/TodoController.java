package com.pyramid.TodoList.Controller;

import com.pyramid.TodoList.Todo;
import com.pyramid.TodoList.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
public class TodoController {
    @Autowired
    private TodoService ts;

    @PostMapping("/addTodo")
    public void addTodo( @RequestParam("id") Integer id,
    HttpServletResponse response) throws IOException {
        ts.AddTodo(new Todo(id));
        response.sendRedirect("showTodo");

}
    @GetMapping("/userProduct")
    public String testHtml(HttpServletResponse response){
        response.setContentType("text/Html");
}
}
