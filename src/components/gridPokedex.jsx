




export default function GridPokedex() {
    return (
        // Usar una tarjeta para darle el borde que se ve en la imagen
        <div className="card p-2"> 
            <table className="table table-striped mb-0">
                <thead>
                    <tr>
                        <th scope="col" >Nombre</th>
                        <th scope="col" >Apellido</th>
                        <th scope="col" >Apellido 2</th>
                        <th scope="col" >Edad</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Puedes dejar filas vacías para simular la cuadrícula de la imagen */}
                    <tr><td>&nbsp;</td><td></td><td></td><td></td></tr>
                    <tr><td>&nbsp;</td><td></td><td></td><td></td></tr>
                    <tr><td>&nbsp;</td><td></td><td></td><td></td></tr>
                    <tr><td>&nbsp;</td><td></td><td></td><td></td></tr>
                    <tr><td>&nbsp;</td><td></td><td></td><td></td></tr>
                    <tr><td>&nbsp;</td><td></td><td></td><td></td></tr>
                    <tr><td>&nbsp;</td><td></td><td></td><td></td></tr>
                    <tr><td>&nbsp;</td><td></td><td></td><td></td></tr>
                    <tr><td>&nbsp;</td><td></td><td></td><td></td></tr>
                    <tr><td>&nbsp;</td><td></td><td></td><td></td></tr>
                    <tr><td>&nbsp;</td><td></td><td></td><td></td></tr>
                </tbody>
            </table>
        </div>
    );
}

