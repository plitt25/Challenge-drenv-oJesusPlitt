import { useEffect, useState } from "react";
import { Container, Table, Button, Form } from "react-bootstrap";

const GestionPrecios = () => {
    const [preciosEspeciales, setPreciosEspeciales] = useState([]);
    const [productos, setProductos] = useState([]);
    const [formData, setFormData] = useState({ usuarioId: "67b7cfc97ad8c7e4b35d0fe1", productoId: "", precioEspecial: "" });
    const [editando, setEditando] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3000/api/productos")
            .then((res) => res.json())
            .then((data) => setProductos(data))
            .catch((error) => console.error("Error al obtener productos:", error));

        fetch("http://localhost:3000/api/precios-especiales")
            .then((res) => res.json())
            .then((data) => setPreciosEspeciales(data))
            .catch((error) => console.error("Error al obtener precios especiales:", error));
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/api/precios-especiales", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((nuevoPrecio) => {
                setPreciosEspeciales([...preciosEspeciales, nuevoPrecio]);
                setFormData({ usuarioId: "67b7cfc97ad8c7e4b35d0fe1", productoId: "", precioEspecial: "" });
            })
            .catch((error) => console.error("Error al registrar precio especial:", error));
    };

    const handleEdit = (id, precioEspecial) => {
        fetch(`http://localhost:3000/api/precios-especiales/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ precioEspecial }),
        })
            .then((res) => res.json())
            .then((precioActualizado) => {
                setPreciosEspeciales(
                    preciosEspeciales.map((p) => (p._id === id ? precioActualizado : p))
                );
                setEditando(null);
            })
            .catch((error) => console.error("Error al actualizar precio especial:", error));
    };

    const handleDelete = (id) => {
        fetch(`http://localhost:3000/api/precios-especiales/${id}`, { method: "DELETE" })
            .then(() => {
                setPreciosEspeciales(preciosEspeciales.filter((p) => p._id !== id));
            })
            .catch((error) => console.error("Error al eliminar precio especial:", error));
    };

    return (
        <Container>

            <div
                className="p-2 px-3 text-white fw-bold"
                style={{
                    fontSize: "3.3rem",
                    textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)"
                }}
            >
                Gestionar Precios Especiales
            </div>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label
                        className="p-2 px-3 text-white"
                        style={{
                            fontSize: "1.5rem",
                            textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)"
                        }}>
                        Usuario ID
                    </Form.Label>

                    <Form.Control type="text" disabled="true" name="usuarioId" value={formData.usuarioId} onChange={handleChange} required />
                </Form.Group>

                <Form.Group>
                    <Form.Label className="p-2 px-3 text-white"
                        style={{
                            fontSize: "1.5rem",
                            textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)"
                        }}>Selecciona un Producto</Form.Label>
                    <Form.Select name="productoId" value={formData.productoId} onChange={handleChange} required>
                        <option value="">Seleccionar</option>
                        {productos.map((producto) => (
                            <option key={producto._id} value={producto._id}>
                                {producto.name} - ${producto.price}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>

                <Form.Group>
                    <Form.Label className="p-2 px-3 text-white"
                        style={{
                            fontSize: "1.5rem",
                            textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)"
                        }}>Precio Especial</Form.Label>
                    <Form.Control type="number" name="precioEspecial" value={formData.precioEspecial} onChange={handleChange} required />
                </Form.Group>

                <Button variant="success" type="submit" className="mt-3">Agregar Precio Especial</Button>
            </Form>

            <Table striped bordered hover className="mt-4">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio Original</th>
                        <th>Precio Especial</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {preciosEspeciales.length > 0 ? (
                        preciosEspeciales.map((precio) => (
                            <tr key={precio._id}>
                                <td>{precio.productoId?.name || "Producto no disponible"}</td>
                                <td>${precio.productoId?.price || "N/A"}</td>
                                <td>
                                    {editando === precio._id ? (
                                        <Form.Control
                                            type="number"
                                            defaultValue={precio.precioEspecial}
                                            onBlur={(e) => handleEdit(precio._id, e.target.value)}
                                        />
                                    ) : (
                                        `$${precio.precioEspecial}`
                                    )}
                                </td>
                                <td>
                                    {editando === precio._id ? (
                                        <Button variant="primary" size="sm" onClick={() => setEditando(null)}>Cancelar</Button>
                                    ) : (
                                        <Button variant="warning" size="sm" onClick={() => setEditando(precio._id)}>Editar</Button>
                                    )}
                                    <Button variant="danger" size="sm" className="ms-2" onClick={() => handleDelete(precio._id)}>Eliminar</Button>
                                </td>
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

export default GestionPrecios;
