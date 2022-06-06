import "./listHero.sass";

import React, {FC} from "react";
import { ListHeroProps } from "./listHeroProps";
import { HeroContainer } from "./heroContainer";

const ListHero : FC<ListHeroProps> = ({heros}) => {
    return(
        <React.Fragment>
            <div className="heros-container">
                {heros.map(item => {
                    return (
                        !item.actual?
                            <HeroContainer 
                                likes={item.likes} 
                                dislikes={item.dislikes} 
                                heroname={item.name} 
                                image={item.location} 
                                description={item.description} 
                            />
                        : ''
                    );
                })}
            </div>
        </React.Fragment>
    );
}

export{ListHero}