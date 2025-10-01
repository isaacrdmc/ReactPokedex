import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

export default function TableData() {

    // ? Creamos el estado para los datos ficticios a utilizar
    const [usuarios] = useState([
        {
            foto_url: "https://randomuser.me/api/portraits/men/11.jpg",
            nombre: "Carlos",
            apellido1: "Ramírez",
            apellido2: "González",
            fecha_nacimiento: "1995-04-12",
            genero: "Masculino"
        },
        {
            foto_url: "https://randomuser.me/api/portraits/women/22.jpg",
            nombre: "María",
            apellido1: "Fernández",
            apellido2: "López",
            fecha_nacimiento: "1998-09-03",
            genero: "Femenino"
        },
        {
            foto_url: "https://randomuser.me/api/portraits/men/33.jpg",
            nombre: "Javier",
            apellido1: "Hernández",
            apellido2: "Torres",
            fecha_nacimiento: "1987-06-25",
            genero: "Masculino"
        },
        {
            foto_url: "https://randomuser.me/api/portraits/women/44.jpg",
            nombre: "Lucía",
            apellido1: "Martínez",
            apellido2: "Ruiz",
            fecha_nacimiento: "2001-12-15",
            genero: "Femenino"
        },
        {
            foto_url: "https://randomuser.me/api/portraits/men/55.jpg",
            nombre: "Andrés",
            apellido1: "Sánchez",
            apellido2: "Morales",
            fecha_nacimiento: "1992-02-07",
            genero: "Masculino"
        },
        {
            foto_url: "https://randomuser.me/api/portraits/women/66.jpg",
            nombre: "Elena",
            apellido1: "Vargas",
            apellido2: "Castillo",
            fecha_nacimiento: "1996-08-19",
            genero: "Femenino"
        },
        {
            foto_url: "https://randomuser.me/api/portraits/men/77.jpg",
            nombre: "Miguel",
            apellido1: "Ortega",
            apellido2: "Navarro",
            fecha_nacimiento: "1990-11-28",
            genero: "Masculino"
        },
        {
            foto_url: "https://randomuser.me/api/portraits/women/88.jpg",
            nombre: "Ana",
            apellido1: "Cruz",
            apellido2: "Jiménez",
            fecha_nacimiento: "1993-03-10",
            genero: "Femenino"
        }
    ]);


    return (
        <div className="card p-2">
            <table className="table table-striped mb-0">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Apellido 2</th>
                        <th scope="col">Fecha Nacimiento</th>
                    </tr>
                </thead>

                {/* // ^ Retornamos los datos */}
                <tbody>
                    {usuarios.map((u, index) => (
                        <tr key={index}>
                            <td>{u.nombre}</td>
                            <td>{u.apellido1}</td>
                            <td>{u.apellido2}</td>
                            <td>{u.fecha_nacimiento}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
