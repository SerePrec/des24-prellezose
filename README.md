# Desafío 24 - Programación Backend

### CoderHouse

## SERVIDOR EN DENO

### Consigna

1. Crear un servidor que utilice el módulo http servest y genere la vista con React render.
2. Configurar denon para que, ante un cambio de código, el servidor de reinicie automáticamente.

   El servidor presentará en su ruta raíz un formulario de ingreso de un color, que será enviado al mismo por método post. Dicho color (en inglés) será incorporado a un array de colores persistido en memoria.

   Por debajo del formulario se deberán representar los colores recibidos en una lista desordenada (ul) utilizando el mismo color para la letra en cada caso. El color de fondo del la vista será negro.

**NOTA:** El servidor deberá tener extensión tsx para el correcto funcionamiento de la sintaxis de vista de React en Typescript.

### Ejecución

Configuré el script **start** de denon para que, ante un cambio de código, el servidor se reinicie automáticamente.

```sh
$ denon start
```

### Vistas

Existe la siguiente vista que provee una manera de probar el desafío.

- **/** : es la vista principal en donde se encuentra el formulario de ingreso de los colores. Por debajo se muestra el listado de colores recibidos.

### Detalles y comentarios

TODO:
