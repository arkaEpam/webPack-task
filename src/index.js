import React from "react";
import Header from "./components/Header/Header.js";
import Main from "./components/Main/Main.js";
import { createRoot } from "react-dom/client";
import Footer from "./components/Footer/Footer.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const App = () => {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
};
root.render(<App />);
