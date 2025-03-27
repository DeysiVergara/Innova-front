import React, { useState } from 'react';

export default function FormularioSubida() {
  const [imagen, setImagen] = useState(null);
  const [texto, setTexto] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMensaje('Formulario enviado con éxito');
  };

  return (
    <main className="main-content">
      <div className="form-container">
        <h1 className="form-title">Formulario de Subida de Recibos</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Sube tu recibo (Imagen):</label>
            <input
              type="file"
              className="form-input file-input"
              accept="image/*"
              onChange={(e) => setImagen(e.target.files[0] && URL.createObjectURL(e.target.files[0]))}
            />
            {imagen && <img src={imagen} alt="Vista previa" className="image-preview" />}
          </div>
          
          <div className="form-group">
            <label className="form-label">Descripción o notas:</label>
            <textarea
              className="form-input"
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
              placeholder="Ingresa cualquier texto relacionado con el recibo..."
              rows="5"
            />
          </div>
          
          <button type="submit" className="submit-btn">Enviar</button>
        </form>
        {mensaje && <p className="success-message">{mensaje}</p>}
      </div>
    </main>
  );
}