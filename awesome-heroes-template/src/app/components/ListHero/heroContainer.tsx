import "./listHero.sass";

import React, {FC, useEffect} from "react";
import { HeroContainerProps } from "./heroContainerProps";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

const HeroContainer : FC<HeroContainerProps> = ({likes, dislikes, description, heroname, image}) => {
    
    const [likesPercent, setLikesPercent] = React.useState(0);
    const [dislikesPercent, setDislikesPercent] = React.useState(0);

    const [totalLikes, setTotalLikes] = React.useState(0);

    useEffect(() => {
        setTotalLikes(likes + dislikes);
        setLikesPercent(Math.round( (likes/totalLikes) * 100));
        setDislikesPercent(Math.round((dislikes/totalLikes) * 100));
    });
    
    return(
        <React.Fragment>
            <div 
                className="all-hero-container" 
                style={
                    {
                        background: `url('${image}') no-repeat`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }
                }
            >
                <article>
                    <div className="hero-status">
                        <div className={classNames('icon-status', (likes > dislikes) ? 'green':'orange')}>
                            {(likes > dislikes) ? <FontAwesomeIcon icon={faThumbsUp}/> : <FontAwesomeIcon icon={faThumbsDown}/>}
                        </div>
                        <h1 className="title">{heroname}</h1>
                    </div>

                    <p>{description}</p>

                    <div className="more">
                        <button>Ver detalles</button>
                    </div>

                </article>

                <div className="all-hero-container-votation-percent">
                    <div className="likes" style={{width: `${likesPercent}%`}}>
                        <FontAwesomeIcon icon={faThumbsUp}/>
                        {`${likesPercent}%`}
                    </div>
                    <div className="dislikes" style={{width: `${dislikesPercent}%`}}>
                        <FontAwesomeIcon icon={faThumbsDown}/>
                        {`${dislikesPercent}%`}
                    </div>
                </div>
                
            </div>
        </React.Fragment>
    )
}

export{HeroContainer}