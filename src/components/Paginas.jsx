import React from "react";
import data from "../db.json";
import './Paginas.css';


const Paginas = () => {
  return (
    <div className="principal">
      {data.map((pagina) => {
        return (
          <>
            <h1 className="titulo">{pagina.cliente}</h1>
            <video
              width={920}
              height={600}
              controls
              src={pagina.linkVideo}
              type="video/mp4"
            ></video>
            <h2>Transcripción</h2>
            <textarea className="trans" cols={62} rows={20}>
              {pagina.transcripcion}
            </textarea>
            <h2>Tareas</h2>
            <h2>{pagina.escenario}</h2>
            {pagina.preguntas.map((tarea, i) => {
              return (
                <>
                  <p>
                    Tarea {i + 1} : {tarea.texto}
                  </p>
                  <p>Duración de la tarea : {tarea.tiempo}</p>
                </>
              );
            })}
          </>
        );
      })}
    </div>
  );
};

export default Paginas;
