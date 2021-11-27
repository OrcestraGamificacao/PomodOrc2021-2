import "./style.css"
import { ReactComponent as Tarefa} from "../../assets/tarefas.svg"
import { ReactComponent as Ampulheta} from "../../assets/ampulheta.svg"
import { ReactComponent as Feedback} from "../../assets/feedback.svg"
import { ReactComponent as Ajuda} from "../../assets/ajuda.svg"


const NavBar = () => {
    return(
        <section className="navBarContainer">
            <section className="navBarItemContainer">
                <a href="">
                    <div className="navBarItem">
                        <Tarefa fill="#DADDFC" width="70%" height="45%"/>
                    </div>
                </a>
                <a href="">
                    <div className="navBarItem">
                        <Ampulheta fill="#DADDFC" width="70%" height="70%"/>
                    </div>
                </a>
                <a href="">
                    <div className="navBarItem">
                        <Feedback fill="#DADDFC" width="70%" height="70%"/>
                    </div>
                </a>
                <a href="">
                    <div className="navBarItem">
                        <Ajuda fill="#DADDFC" width="70%" height="70%"/>
                    </div>
                </a>
            </section>
        </section>
    )
}

export default NavBar