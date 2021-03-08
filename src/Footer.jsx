import React from "react";



function Footer(){
    const getCurrentYear = () => {
        return new Date().getFullYear();
      };

    return (
        <footer>
        <div>
          <p className = "footer">© Copyright {getCurrentYear()} Mike Acton</p>
        </div>
      </footer>
    )
}

export default Footer;