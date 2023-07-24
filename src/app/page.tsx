import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section id="banner" className="fade-in">
        <h2>Os melhores hambúrgueres da cidade</h2>
        <p>Experimente nossos deliciosos hambúrgueres artesanais feitos com os melhores ingredientes!</p>
        <a href="#menu" className="btn">Ver Menu</a>
      </section>
      <section id="menu" className="fade-in">
        <div className="item">
          <Image src="https://files.menudino.com/cardapios/24456/119.jpg" alt="Hambúrguer 1" width={300} height={300} />
          <h3>Hambúrguer Saboroso</h3>
          <p>Um hambúrguer delicioso, com carne suculenta, queijo derretido e vegetais frescos.</p>
        </div>
        <div className="item">
          <Image src="https://files.menudino.com/cardapios/24456/464.jpg" alt="Hambúrguer 2" width={300} height={300} />
          <h3>Hambúrguer Especial</h3>
          <p>Este hambúrguer é especial e único, preparado com ingredientes selecionados.</p>
        </div>
      </section>
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
      <section id="contato" className="fade-in">
        <h2>Entre em contato</h2>
        <p>Tire suas dúvidas ou faça um pedido. Estamos aqui para atendê-lo.</p>
        <form id="contato-form">
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="mensagem">Mensagem:</label>
          <textarea id="mensagem" name="mensagem" required></textarea>

          <button type="submit">Enviar</button>
        </form>
      </section>
    </main>
  )
}
