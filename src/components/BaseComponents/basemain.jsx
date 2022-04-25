import React from "react";
import Container from "../reusableComponents/Container";
import Header from "../header";
import Search from "../search";
import Movies from "../movies";
import Promotional from "../promotional";

const BaseMain = () => {

    return (
        <section className="basemain">
            <Header />
            <Search />
            
            <Promotional />
            <Movies />
        </section>
    )
}

export default BaseMain;
