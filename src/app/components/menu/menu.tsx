import Image from "next/image"

const Menu = () => {
    return (
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
    )
}

export default Menu