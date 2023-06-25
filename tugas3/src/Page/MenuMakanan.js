import React, { Component } from "react";
import ListMakanan from "../ListData/ListMakanan";

class MenuMakanan extends Component{
    constructor(props){
        super(props);
        this.state={
           Number :0,
           InputValue:("masukan pesanan anda")
        }
        this.rubahpesanan=this.rubahpesanan.bind(this);
        this.pesanan=this.pesanan.bind(this);
    }
    rubahpesanan(){
        this.setState((state,props)=>{
            return{
                pesan: state.rubahpesanan
            };
        });
    }
    pesanan(e){
        console.log(e.target.value);
    }
    render(){
        return(
            <div>
                <h3>Daftar Makanan Yang Kami Sediakan : </h3>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <ListMakanan linkGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"/>
                                <center>
                                    <button onClick={this.pesanan}>pesan sekarang</button>
                                </center>
                            </td>
                            <td>
                                <ListMakanan linkGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"/>
                                <center>
                                    <button onClick={this.pesanan}>pesan sekarang</button>
                                </center>
                            </td>
                            <td>
                                <ListMakanan linkGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png"/>
                                <center>
                                    <button onClick={this.pesanan}>pesan sekarang</button>
                                </center>
                            </td>
                            <td>
                                <ListMakanan linkGambar="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png"/>
                                <center>
                                    <button onClick={this.pesanan}>pesan sekarang</button>
                                </center>
                            </td>
                            <td>
                                <ListMakanan linkGambar="https://blog.tokowahab.com/wp-content/uploads/2020/03/Resep-Nasi-Kuning-Tumpeng-Mini.jpg"/>
                                <center>
                                    <button onClick={this.pesanan}>pesan sekarang</button>
                                </center>
                            </td>
                            
                        </tr>
                    </tbody>
                </table>
                <br/>
                <input type="text" value ={this.state.InputValue} onChange={this.pesanan}/>
                <h3>pesanan anda : {this.state.Number}</h3>

            </div>
        )
    }
}
export default MenuMakanan