import React from "react";
import PropTypes from "prop-types";

function Main({asideContent, children}) {
    return (
        <>
            <aside>
                {asideContent}
            </aside>
            <main>
                {children}
            </main>
        </>
    )
}

Main.propTypes = {
    asideContent: PropTypes.object
};

export default Main;