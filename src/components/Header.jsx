// <!-- * Componente para el encabezado -->
export default function Header( titulo ) {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    {titulo.titulo}
                </a>
            </div>
        </nav>
    )
}