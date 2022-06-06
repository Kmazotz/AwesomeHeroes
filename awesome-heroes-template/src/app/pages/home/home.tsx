import "./home.sass";

import React, { useEffect } from "react";
import { Hero, ListHero } from "../../components";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Home : React.FC = () => {

    const Heros = [
        {
            name: "ironman",
            likes: 600,
            dislikes: 200,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique rem accusantium quidem distinctio tempora voluptates fugiat dolor ullam a quo nobis sit commodi aliquam nihil dolore molestias, necessitatibus animi itaque.",
            location: "",
            actual: true
        },
        {
            name: "superman",
            likes: 600,
            dislikes: 200,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            location: "https://www.xtrafondos.com/descargar.php?id=7071&resolucion=3840x2160",
            actual: false
        },
        {
            name: "thor",
            likes: 80,
            dislikes: 600,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            location: "https://www.xtrafondos.com/wallpapers/el-rayo-de-thor-7655.jpg",
            actual: false
        },
        {
            name: "batman",
            likes: 80,
            dislikes: 600,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            location: "https://i0.wp.com/www.clickwallpapers.net/wp-content/uploads/2022/02/clickwallpapers-wallpaper-batman-4k_img6-scaled.jpg?fit=2560%2C1440&ssl=1",
            actual: false
        },
        {
            name: "spiderman",
            likes: 600,
            dislikes: 80,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            location: "https://images7.alphacoders.com/940/940633.jpg",
            actual: false
        }
    ]

    const [MonthHero, setMonthHero] = React.useState("");
    const [closeAlert, setCloseAlert] = React.useState(false);

    const [likes, setLikes] = React.useState(0);
    const [dislikes, setDislikes] = React.useState(0);
    const [description, setDescription] = React.useState("");


    useEffect(() => {
        setMonthHero(Heros[0].name);
        setLikes(Heros[0].likes);
        setDislikes(Heros[0].dislikes);
        setDescription(Heros[0].description);
    });
   
    return(
    
        <React.Fragment>
            
            <header className={classNames("app-header", MonthHero)}>
                
                <Hero HeroName={MonthHero as string} Likes={likes} dislikes={dislikes} description={description}/>

                <div className="scroll-down-container">
                    <div className="chevron"></div>
                    <div className="chevron"></div>
                    <div className="chevron"></div>
                </div>

            </header>
            <section className={classNames('hero-notification-information', closeAlert? 'close': '')}>
                <article className={closeAlert? 'close': ''}>
                    <div className="title">
                        <h5>Lorem ipsum dolor</h5>
                        <h1>Lorem ipsum dolor, sit amet consectetur</h1>
                    </div>
                    <div className="content">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quidem harum et expedita repellat facere nesciunt at quis, alias porro odit dolore asperiores ratione esse iste. Ex quia quos omnis.</p>
                    </div>
                    <div className="btn-close-information">
                        <FontAwesomeIcon icon={faTimes} onClick={() => setCloseAlert(!closeAlert ? true : false)}/>
                    </div>
                </article>
            </section>
            <section className="hero-list-heroes">
                <h1>Super heroes anteriores</h1>
                <ListHero heros={Heros}></ListHero>
            </section>
            <footer>
                <ul className="links">
                    <li>
                        <Link to="/">Terminos y condiciones</Link> 
                    </li>
                    <li>
                        <Link to="/">Política de tratamiento de datos</Link>
                    </li>
                    <li>
                        <Link to="/">Contactenos</Link>
                    </li>
                </ul>
                <div className="social-media">
                    <span>Siguenos</span>
                    <FontAwesomeIcon icon={faFacebookF}/>
                    <FontAwesomeIcon icon={faTwitter}/>
                </div>
            </footer>
        </React.Fragment>
    );
}

export{Home}