import "./hero.sass";

import React, {FC, useEffect} from "react";
import { HeroProps } from "./HeroProps";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { faWikipediaW } from "@fortawesome/free-brands-svg-icons";

const Hero : FC<HeroProps> = ({HeroName, Likes, dislikes, description}) => {

    const [totalVotes, setTotalVotes] = React.useState(0);
    const [likesPercent, setLikesPercent] = React.useState(0);
    const [dislikesPercent, setDislikesPercent] = React.useState(0);

    useEffect(() => {
        setTotalVotes(Likes + dislikes);
        setLikesPercent((Likes/totalVotes) * 100);
        setDislikesPercent((dislikes/totalVotes) * 100);
    });

    return(
        <React.Fragment>
            <div className={classNames("hero", HeroName)}>
                <div className="hero-information-container">
                    <article className="hero-information">
                        <div className="hero-title">
                            <p>Dinos tu opinión sobre</p>
                            <h1 className="hero-name">{ `${HeroName}?` }</h1>
                        </div>
                        <div className="hero-description">
                            <p>{description}</p>
                        </div>
                        <div className="hero-read-more">
                            <div>
                                <div className="icon">
                                    <FontAwesomeIcon icon={faWikipediaW}/>
                                </div>
                                <div className="txt">Más informacion...</div>
                            </div>
                        </div>
                        <div className="hero-question">
                            <span>¿Cual es tu voto?</span>
                        </div>
                    </article>
                    <div className="select-votation">
                        <div className="btn-like">
                            <FontAwesomeIcon icon={faThumbsUp}/>
                        </div>
                        <div className="btn-dislike">
                            <FontAwesomeIcon icon={faThumbsDown}/>
                        </div>
                    </div>
                </div>

                <div className="votation-percent">
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
    );
};

export {Hero}

