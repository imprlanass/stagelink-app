import heroRightImg from "../assets/hero-right.jpg"
import { NavLink } from "react-router-dom"

function Home(){
    return(
        <main className="main-container">

            <section className="hero">
                <div className="hero-left">
                    <h1>Connectez les compétences aux opportunités réelles.</h1>
                    <p>
                        StageLink aide les PME marocaines à trouver des étudiants qualifiés
                        grâce à des micro-projets basés sur les compétences, sans
                        les lourdeurs administratives.
                    </p>
                    <button className="primary-btn">
                        Voir les projets
                    </button>
                </div>

                <div className="hero-right">
                    <img src={heroRightImg} alt="HeroRight Image" />
                </div>
            </section>

            <section className="how-it-works">
                <h2>Comment ça marche&nbsp;?</h2>
                    <p className="section-subtitle">
                        Un processus simple, rapide et basé sur les compétences.
                    </p>

                <div className="steps">
                    <div className="step-card">
                        <span className="step-icon">🧾</span>
                        <h3>Publiez un micro-projet</h3>
                        <p>
                            Les PME publient des besoins précis comme la création
                            d’un logo, la gestion des réseaux sociaux ou du contenu.
                        </p>
                    </div>

                    <div className="step-card">
                        <span className="step-icon">🎯</span>
                        <h3>Matching par compétences</h3>
                        <p>
                            Les étudiants trouvent des projets qui correspondent
                            exactement à leurs compétences techniques.
                        </p>
                    </div>

                    <div className="step-card">
                        <span className="step-icon">📄</span>
                        <h3>Générez une convention</h3>
                        <p>
                            Une convention de stage est générée automatiquement
                            pour simplifier les démarches administratives.
                        </p>
                        <small className="disclaimer">
                            (Simulation à des fins pédagogiques)
                        </small>
                    </div>
                </div>
            </section>


            <section className="audience">
                <h2>À qui s’adresse StageLink&nbsp;?</h2>
                <p className="section-subtitle">
                    Une plateforme pensée pour les PME et les étudiants.
                </p>

                <div className="audience-cards">
                    <div className="audience-card">
                        <span className="audience-icon">🏢</span>
                        <h3>Pour les PME</h3>
                        <p>
                            Trouvez rapidement des étudiants qualifiés pour des besoins
                            précis, sans passer par des annonces de stage vagues
                            ou des processus RH complexes.
                        </p>
                    </div>

                    <div className="audience-card">
                        <span className="audience-icon">🎓</span>
                        <h3>Pour les étudiants</h3>
                        <p>
                            Accédez à des projets concrets adaptés à vos compétences
                            afin de gagner une expérience professionnelle réelle
                            et valorisable.
                        </p>
                    </div>
                </div>
            </section>


            <section className="cta">
                <h2>Prêt à découvrir des opportunités&nbsp;?</h2>
                <p>
                    Explorez des micro-projets adaptés à vos compétences
                    et commencez une expérience professionnelle concrète.
                </p>

                <NavLink to="/projects" className="cta-btn">
                    Explorer les projets
                </NavLink>
            </section>


        </main>
    );
}

export default Home