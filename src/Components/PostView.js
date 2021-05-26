import React from 'react';
import {Link} from 'react-router-dom';


const PostView = (props) =>{

    const artistDetails = ({artists}) => {

        if (artists){

            return artists.map((item) => {
                return(
                    <div key={item.id}>
                        <h3> {item.name} </h3>
                        <Link className= "btn btn-info" to={`/post/${item.id}`}>Details</Link>
                    </div>
                )

                }
            )
        }
    } 

    return(
        <div>
         {artistDetails(props)}    
        </div>
   )

}

export default PostView;