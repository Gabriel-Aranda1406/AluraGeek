import ListarProdutosHome from "../../components/produtos/listarprodutoshome/ListarProdutosHome";
import ModalProduto from "../../components/produtos/modalprodutos/ModalProduto";

function Home() {
    return (
        <>
            <div className="bg-stone-600  w-screen flex justify-center">
                <div className="container grid grid-cols-2 text-white">
                    <div className="flex flex-col items-center gap-4 justify-center py-4" >
                        <img src="https://ik.imagekit.io/4lf7m2y5a/SUPER-Games-23-05-2024.png?updatedAt=1716473741031" alt="" width="400px" />
                        <h1 className="text-5xl font-display ">Onde cada jogo vira realidade.</h1>

                        <div className="flex justify-around gap-4">
                            <button className='
                                    bg-indigo-600
                                    '>
                                <ModalProduto />
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <img
                            src="https://ik.imagekit.io/4lf7m2y5a/mario.png?updatedAt=1716478930111"
                            alt="Imagem Home"
                            width="200px"
                        />
                    </div> 
                </div>
            </div>
            <ListarProdutosHome />
        </>
    );
}

export default Home;