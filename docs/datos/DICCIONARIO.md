# Diccionario de datos

## ventas.csv y encuesta.csv
Copias del material original. ventas.csv tiene 5 registros y moneda no especificada. Fecha: texto ISO; Producto: nombre; Precio: por unidad; Cantidad: unidades. encuesta.csv tiene 6 respuestas con variantes de texto. id identifica respuesta; satisfaccion contiene la categoría original.

## ventas_proyecto.csv
Datos sintéticos para enseñanza. 121 filas de entrada, incluidas anomalías intencionales. Fechas previstas: enero a marzo de 2026.
- VentaID: identificador único esperado de una línea de venta; una copia exacta es un error de carga.
- Fecha: fecha del registro, formato AAAA-MM-DD.
- ProductoID: clave del catálogo.
- Precio: precio unitario en CRC. En este ejercicio no se admiten precios negativos.
- Cantidad: unidades enteras positivas. No se incluyen devoluciones.
- Sucursal: Centro, Norte o Sur; admite normalización de espacios y mayúsculas.

## catalogo_proyecto.csv
- ProductoID: clave única.
- Producto: nombre.
- Categoria: grupo del producto.
- PrecioReferencia: referencia en CRC; no autoriza reemplazar automáticamente un precio inválido.

No hay datos personales ni costos. Los datos no permiten inferir ganancias, preferencias de toda la población ni efectos causales. Marzo contiene solo el día 1: no comparar su total directamente con meses completos.
