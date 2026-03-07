import Pedido from "./Pedido"
export default () => {
  return(
    <div className="container border">
      <div className="row">
        <div className="col-12">
          {/* .fa-solid.fa-hippo */}
          <i className="fa-solid fa-hippo fa-2x"></i>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-xl-3">
          <Pedido 
            data="22/02/2026"
            icone="camera"
            titulo="Câmera"
            descricao="Uma câmera 4K"/>
        </div>
        <div className="col-sm-12 col-md-6 col-xl-3">
          <Pedido 
            data="23/02/2026"
            icone="book"
            titulo="Livro"
            descricao="Um bom livro"/>
        </div>
        <div className="col-sm-12 col-md-6 col-xl-3">
          <Pedido 
            data="26/02/2026"
            icone="computer"
            titulo="Computador"
            descricao="Computador Dell"/>
        </div>
        <div className="col-sm-12 col-md-6 col-xl-3">
          <Pedido 
            data="28/02/2026"
            icone="bicycle"
            titulo="Bicicleta"
            descricao="Bicleta de 16 marchas"/>
        </div>
      </div>
    </div>
  )

}