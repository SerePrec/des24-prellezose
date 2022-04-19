import { React, ReactDOMServer, createApp, config } from "./deps.ts";
import * as colorsModel from "./models/colors.model.ts";

const PORT = Number(config().PORT) || 8080;

const app = createApp();

app.get(
  "/",
  async req =>
    await req.respond({
      status: 200,
      headers: new Headers({
        "content-type": "text/html; charset=UTF-8"
      }),
      body: ReactDOMServer.renderToString(
        <html lang="es">
          <head>
            <meta charSet="UTF-8" />
            <link
              href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
              rel="stylesheet"
              integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
              crossOrigin="anonymous"
            />
            <title>Desafío 24</title>
          </head>
          <body
            style={{
              backgroundColor: "black",
              color: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <h1>
              DESAFIO 24 -{" "}
              <small>
                <i>CoderHouse</i>
              </small>
            </h1>
            <form action="/" method="post" style={{ width: "25rem" }}>
              <div className="input-group my-3">
                <input
                  type="text"
                  name="color"
                  className="form-control"
                  placeholder="Indroduce un color en inglés"
                />
                <button className="btn btn-outline-secondary" type="submit">
                  Enviar
                </button>
              </div>
            </form>
            <ul style={{ textAlign: "left" }}>
              {colorsModel.getAll().map((color, index) => (
                <li key={index} style={{ color }}>
                  {color}
                </li>
              ))}
            </ul>
          </body>
        </html>
      )
    })
);

app.post("/", async req => {
  const data = (await req.formData()).value("color");
  if (data) colorsModel.save(data);
  await req.redirect("/");
});

app.listen({ port: PORT });
console.log(`Servidor Deno corriendo en puerto ${PORT}`);
