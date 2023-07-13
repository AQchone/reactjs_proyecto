import { useEffect } from "react";

const Nosotros = () => {

    const clickear = () => {
        console.log("click")
    }
useEffect(()=>{
    window.addEventListener("click",clickear)

    return()=>{
        window.removeEventListener("click",clickear)
    }
},[])

        return (
            <div className="container my-5">
                <h2>Nosotros</h2>
                <hr />
            </div>
        );
    }

    export default Nosotros

