// <!-- * Componente para el encabezado -->
export default function Header(titulo) {
    return (

        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <image src="https://art.pixilart.com/023590844cc0a8b.png"/>
                <a className="navbar-brand" href="#">
                    {titulo.titulo}
                </a>
            </div>
        </nav>
    )
}