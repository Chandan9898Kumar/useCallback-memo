import React from "react"
import { NavLink } from "react-router-dom";
const Home = () => {

    return (
        <>
            <h1> Home Page </h1><br /><br /><br /><br />
            <NavLink to='/useCallback'>useCallback</NavLink><br /><br />
            <NavLink to='/MemoCom'>Memo Component</NavLink><br /><br />


        </>
    )
}
export default Home;