import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";

const PreciosEspeciales = () => {
    const [preciosEspeciales, setPreciosEspeciales] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/precios-especiales")
            .then((res) => res.json())
            .then((data) => setPreciosEspeciales(data))
            .catch((error) => console.error("Error al obtener precios especiales:", error));
    }, []);

    return (
        <Container>
            <div
                className="p-2 px-3 text-white fw-bold"
                style={{
                    fontSize: "3.3rem",
                    textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)"
                }}
            >
                Precios Especiales
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio Original</th>
                        <th>Precio Especial</th>
                    </tr>
                </thead>
                <tbody>
                    {preciosEspeciales.length > 0 ? (
                        preciosEspeciales.map((precio) => (
                            <tr key={precio._id}>
                                <td>{precio.productoId?.name || "Sin nombre"}</td>
                                <td>{precio.productoId?.price || "N/A"}</td>
                                <td>{precio.precioEspecial}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No hay precios especiales disponibles.</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Container>
    );
};

export default PreciosEspeciales;
