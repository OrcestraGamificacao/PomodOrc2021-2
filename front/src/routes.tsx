import { Route, BrowserRouter , Routes} from "react-router-dom"
import Home from "../src/pages/Home/Index" 
import Clock from "../src/components/Clock/Clock"
import { Dispatch, SetStateAction, useState } from "react"
import Tabs from "../src/components/Tabs/Tabs"
import Title from "../src/pages/Home/tittle"
// import Todo from "../src/components/Todo"

export const Router = () => {
        return(
        <BrowserRouter>
            <Routes>
                <Route path="/iniciar" element={<Title></Title>} ></Route>
                <Route path="/" element={<Home/>} />
            </Routes>
            <Routes>

                {/* <Route path="/Lista" element={<Todo></Todo>} ></Route> */}
                        
            </Routes>

                    
        </BrowserRouter>
    );
}
