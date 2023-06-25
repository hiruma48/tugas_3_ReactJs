import React from "react";

const Header = () =>{
    var product="product |"
    var kontak="kontak |"
    var tentangkami="tentang kami"
        return(
            <div>
                 <h2>
                    <center>home | {product} {kontak} {tentangkami}</center>
                 </h2>
            </div>
        );
    
}

export default Header;