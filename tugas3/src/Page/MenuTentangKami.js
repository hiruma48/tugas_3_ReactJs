import React, { Component } from "react";


class MenuTentangKami extends Component{
    constructor (props){
        super(props);
        this.state={
            tentang:"Warung Nusantara Adalah Restoran Yang Bernuasa Makanan Nusantara,Kami Ada Untuk Membuat Anda Menikmati Makanan Khas Dari Nusantara"
        }
    }
    render(){
        return(
            <div>
                <center>
                    <p>tentang kami</p>{this.state.tentang}
                    
                </center>
            </div>
        )
    }
}
export default MenuTentangKami