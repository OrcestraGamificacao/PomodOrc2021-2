import { Route, BrowserRouter , Routes} from "react-router-dom"
import Home from "../src/pages/Home/Index"
import About from "../src/pages/About"
import Clock from "../src/components/Clock/Clock"
import { Dispatch, SetStateAction, useState } from "react"
import Tabs from "../src/components/Tabs/Tabs"
import Title from "../src/pages/Ticker/title"
import Todo from "../src/pages/ToDoList/index"
import Sub from "../src/pages/SubTasks/Sub"

export const Router = () => {
        return(
        <BrowserRouter>
            <Routes>
                
                <Route path="/pomodoro" element={<Title></Title>} ></Route>
                <Route path="/" element={<Home/>} />
                <Route path="/sobre" element={<About/>} />
                <Route path="/subtasks" element ={<Sub/>} ></Route>

            </Routes>
            <Routes>

                <Route path="/todo" element={<Todo></Todo>} ></Route>
                        
            </Routes>

                    
        </BrowserRouter>
    );
}
