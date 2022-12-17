import './section2.css';
import TeamCard from "../../../common/components/team_card/team_card";

const Section2 = () => {
    return (
        <body>
            <section className='section'>
                <section className='frame'>
                    <div className='names' id='almas'>Almas</div>
                    <div className='names' id='danya'>Danya</div>
                    <div className='names' id='mary'>Mary</div>
                    <div className='names' id='vova'>Vova</div>
                </section>
                <body className='body'>
                    <section className='text'>
                        <p className='header'>
                            We are team of <span className='white__text'>2 engineers </span>
                            and <span className='white__text'>2 designers</span>
                        </p>
                        <p className='description'>
                            Fermentum tellus nec volutpat non enim consequat adcsddipiscing euismod. Mi et tortor dolor nec eu
                            rtor dolor nec eur tor dolor nec eu
                        </p>
                    </section>
                    <section className='team'>
                        <TeamCard />
                        <TeamCard />
                        <TeamCard />
                        <TeamCard />
                    </section>
                </body>
            </section>
        </body>
    );
}

export default Section2;