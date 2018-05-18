import React, { Component } from 'react';
import {textos} from '../textos.json';
import '../javascript.css';


class Yava extends Component{
  constructor(){
    super();
    this.state={
      textos
    }
  }
  render(){
    const cardInfo = this.state.textos.map(function(data, i){
      return(
        <div>
       <div>
               <img className="card-img-top" src={data.cardPost.postImageUrl} alt="Card image cap"></img>
               </div>


              <div>
              {data.cardPost.postTitle}
              </div>
            <div className="col-md-7">

            {data.cardPost.postDescription}
            </div>
            <div className="col-md-5">
            </div>
            </div>
    );
    })

    return(
      <div>
      <div className="caja">

        {cardInfo}
        </div>

</div>


    );
  }
}





export default Yava;
