import React, { useState } from 'react';
export default function FormularioSubida() {
        const [imagen, setImagen] = useState(null);
        const [texto, setTexto] = useState('');
        const [mensaje, setMensaje] = useState('');

        const handleImagenChange = (e) => {
          const archivo = e.target.files[0];
          if (archivo) {
            setImagen(URL.createObjectURL(archivo)); // Muestra una vista previa
          }
        };
        const handleTextoChange = (e) => {
            setTexto(e.target.value);
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            // Aquí podrías hacer una solicitud para enviar la imagen y el texto a un servidor
            setMensaje('Formulario enviado con éxito');
        };
    return (
        <>
            <main className="container-xl mt-5">
                <h2 className="text-center"></h2>
                <div className="row mt-5">
                    <h1>Formulario de Subida de Recibos</h1>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div>
                            <label htmlFor="imagen">Sube tu recibo (Imagen):</label>
                            <div>
                                <input
                                type="file"
                                id="imagen"
                                accept="image/*"
                                onChange={handleImagenChange}
                                />
                                {imagen && <img src={imagen} alt="Vista previa" width="200" />}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="texto">Descripción o notas:</label>
                            <textarea
                            id="texto"
                            value={texto}
                            onChange={handleTextoChange}
                            placeholder="Ingresa cualquier texto relacionado con el recibo..."
                            />
                        </div>
                        <button type="submit">Enviar</button>
                    </form>
                    {mensaje && <p>{mensaje}</p>}
                </div>
            </main>
        </>
    )
}