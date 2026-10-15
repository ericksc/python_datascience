# Revisión de coherencia y navegación · versión 1.4.0

Fecha: 15 de octubre de 2026.

## Navegación común
Los seis badges muestran al inicio cinco tarjetas: Sesiones, Ruta de aprendizaje, Evidencias y criterios, Reto de cierre y Materiales y pruebas. Cada tarjeta abre una vista con URL propia, por ejemplo `#badge-4/reto`. La dirección base de cada badge conserva su función de entrada y muestra sus sesiones.

Cada sesión tiene un índice de lecciones, práctica y autoevaluación. Las 82 lecciones se abren individualmente con rutas como `#modulo-10/leccion-2`; las explicaciones y sus ejemplos permanecen juntos. El notebook conserva el orden de ejecución compartido. Se incorporan ubicación, selección activa y enlaces de continuación.

## Coherencia por badge
| Badge | Revisión y ajuste |
|---|---|
| 1 · Python y Jupyter | Mantiene los prerrequisitos iniciales, cuatro sesiones, reto de inventario y Prueba corta I. Materiales y criterios se consultan desde las tarjetas. |
| 2 · Catálogo de películas | El subtítulo se limita a exploración, selección, transformación y resumen. La limpieza con imputación o eliminación y las uniones se reservan al badge 3. Se conserva la rúbrica específica de 20 × 5 puntos y el paquete de cuatro partes. |
| 3 · Pandas aplicado | Se mantiene el alcance de los cuatro notebooks y la Prueba corta II; el caso hotelero forma parte de su preparación. agg, transform y filter de grupos son ampliación del reto. Se corrigen los enlaces de simulación de las sesiones 9–14 y las referencias a columnas de una tabla anterior que no corresponde. |
| 4 · Manipulación | Se explicita que la rúbrica específica del proyecto es la que se aplica, sin sumar otra rúbrica paralela. Calidad avanzada, uniones, reorganización y tiempo se apoyan en Pandas previo. |
| 5 · NumPy | Se comprueba la progresión arreglos → matrices → máscaras → ventanas y la correspondencia con el reto de sensores. Se indica que el reto genera sus propios datos con semilla fija. |
| 6 · Visualización | Se conserva la progresión elección de gráficos → Matplotlib → Seaborn → Plotly → comunicación. Se hace explícito que el reto retoma la tabla validada en el badge 4. |

## Ajustes transversales
- La guía deja de describir una Prueba 2 distinta después de la sesión 13 y enlaza la Prueba corta II vigente, preparada con el caso hotelero de la sesión 14.
- No se reincorpora la duración de 60 minutos retirada de esa prueba.
- La guía distingue ponderaciones orientativas y condiciones oficiales en TEC Digital.
- Se distinguen rúbricas específicas de los badges 2 y 4 y la rúbrica común usada por los otros retos.
- Se corrige el conteo de recursos: 28 notebooks por sesión, una plantilla de proyecto y paquetes adicionales separados.
- Se elimina la afirmación global de que todos los recursos carecen de datos personales: los datos del proyecto son sintéticos y los paquetes históricos requieren las aclaraciones correspondientes.
- La herramienta de apertura de sesiones admite las 28 sesiones, en lugar de limitarse a 22.
- La versión de recursos se actualiza para que el navegador cargue los cambios.

## Comprobaciones
- Renderizado de 468 vistas, incluidos los enlaces internos generados; 234 enlaces internos distintos y ningún archivo local enlazado ausente.
- Seis badges: cinco tarjetas, una selección activa y sin desbordamiento horizontal en la vista de escritorio probada.
- Prueba real de navegación por tarjeta, enlace directo a una lección y autoevaluación con retroalimentación (3/3).
- Sintaxis JavaScript comprobada y análisis sintáctico de 274 celdas de código en 29 notebooks sin errores. Este análisis no equivale a ejecutar todos los ejemplos científicos con sus dependencias.
- Se conserva el total de 28 sesiones, seis badges y 70 horas de clase.

Para repetir las comprobaciones de rutas y archivos: `node scripts/verify_navigation.cjs`.
