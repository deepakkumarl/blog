import { useParams } from "react-router-dom"


const Insidepost = () => {
    const {id} = useParams();

    return(
        <div>post {id} </div>

    )
}

export default Insidepost