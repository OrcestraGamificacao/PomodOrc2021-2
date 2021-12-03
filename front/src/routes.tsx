import { Route, BrowserRouter , Routes} from "react-router-dom"
import Home from "../src/pages/Home/Index"
import About from "../src/pages/About"
import Clock from "../src/components/Clock/Clock"
import { Dispatch, SetStateAction, useState } from "react"
import Tabs from "../src/components/Tabs/Tabs"
import Title from "../src/pages/Ticker/tittle"
import Todo from "../src/pages/ToDoList/index"
import Sub from "../src/pages/SubTasks/Sub"

export const Router = () => {
        return(
        <BrowserRouter>
            <Routes>
                
                <Route path="/iniciar" element={<Title></Title>} ></Route>
                <Route path="/" element={<Home/>} />
                <Route path="/About" element={<About/>} />
                <Route path="/Sub" element ={<Sub/>} ></Route>
            </Routes>
            <Routes>

                <Route path="/Lista" element={<Todo></Todo>} ></Route>
                        
            </Routes>

                    
        </BrowserRouter>
    );
}
