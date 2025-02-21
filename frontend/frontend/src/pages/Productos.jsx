import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";

const Productos = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/productos")
            .then((res) => res.json())
            .then((data) => setProductos(data))
            .catch((err) => console.error("Error al obtener productos", err));
    }, []);

    return (
        <Container className="mt-4">

            <div
                className="p-2 px-3 text-white fw-bold"
                style={{
                    fontSize: "3.3rem",
                    textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)"
                }}
            >
                Lista de Artículos
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Categoría</th>
                        <th>Marca</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((producto) => (
                        <tr key={producto._id}>
                            <td>{producto.name}</td>
                            <td>${producto.price}</td>
                            <td>{producto.category}</td>
                            <td>{producto.brand}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default Productos;
