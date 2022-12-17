import './team_card.css';

const TeamCard = () => {
    return (
        <section className='team__card'>
            <rect className='rect'></rect>
            <section className='picture'>
                <section className='icons'>
                    <section className='icon__telegram'>

                    </section>
                    <section className='icon__github'>

                    </section>
                </section>
            </section>
            <section className='text'>
                <section className='metadata'>
                    <p className='name'>Almas Saparov</p>
                    <p className='address'>Uralsk, KZ</p>
                </section>
                <p className='skills'>HTML, CSS, JavaScript, React </p>
            </section>
        </section>
    );
}

export default TeamCard;