import React, { useState } from 'react';
import "./Result.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
import FavoriteFilled from "@material-ui/icons/Favorite";
const Result = ({img,
    location,
    title,
    description,
    star,
    price,
    total,
like}) => {
    const [liked,setLiked] = useState(like);
    const likeHandler=()=>{
        setLiked(!liked);
    }
    return (
        <div className="result">
            <img alt="place" src={img} />
            {liked?<FavoriteFilled onClick={likeHandler} className="result__fav"/>:<FavoriteBorderIcon onClick={likeHandler} className="result__fav"/>}
            <div className="result__info">
                <div className="result__info__uppper">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{description}</p>
                </div>
                <div className="result__info__bottom">
                    <div className="result__info__bottom__stars">
                        <StarIcon  className="result__info__star__icon"/>
                        <p>
                            <strong>
                                {star}
                            </strong>
                        </p>
                    </div>
                    <div className="result__info__bottom__price">
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Result;