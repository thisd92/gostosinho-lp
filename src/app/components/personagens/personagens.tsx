const Personagens = () => {
    return (
        <section id="personagens" className="fade-in">
            <h2>Conheça nossos personagens</h2>
            <p>Cada hambúrguer do nosso cardápio é inspirado em um personagem. Veja quem são eles:</p>
            <div id="personagens-lista">
                <div className="personagem">
                    {/* <Image src="personagem1.jpg" alt="Personagem 1" /> */}
                    <h4>Nome do Personagem 1</h4>
                </div>
                <div className="personagem">
                    {/* <Image src="personagem2.jpg" alt="Personagem 2" /> */}
                    <h4>Nome do Personagem 2</h4>
                </div>
            </div>
        </section>
    )
}

export default Personagens