# 🌍 QuijoteMapper

**Plataforma de Gemelos Digitales: Creando una copia digital de Castilla La Mancha**
*Permitiendo el acceso a mapas 3D de alta resolución para la conservación del patrimonio autonómico, prevención de incendios, control de cauces...*

🔗 **Demo:** [QuijoteMapperWeb](https://xxerleckxx.github.io/QuijoteMapper/)  

---

## 📖 Descripción del Proyecto

**QuijoteMapper** es una plataforma web diseñada para cerrar la brecha entre la imagen satelital convencional y la topografía láser profesional. Funciona como una "Wikipedia de la realidad 3D", permitiendo la visualización de copias digitales en el navegador de terreno, edificios, ríos y elementos reales.
Los datos se obtienen mediante fotografías tomadas por **drones**, a partir de estas fotos se realiza una **reconstrucción 3D con algoritmos trigonométricos**.
La web se puede ir **actualizando**, añadiendo cada vez más modelos y cubrir más áreas **bajo demanda**. Estos datos están disponibles a traves del portal web para **cualquier persona sin necesidad de conocimientos técnicos.**

---

## 🔮 Casos de Uso

* **Patrimonio:** Preservación digital de monumentos históricos.
* **Agro-Tech:** Monitorización de cultivos y salud vegetal.
* **Ingeniería Civil:** Control de movimientos de tierra y taludes.
* **Prevención de Incendios Forestales:** Control y monitorización de zonas con riesgo de incendio para verificar la limpieza del terreno y planificar mantenimientos preventivos.
* **Análisis de ríos y caudales:** Permite visualizar con filtros específicos el caudal de ríos, contando con histórico para analizar épocas claves.
---

## 🌟 Ejemplos Destacados en la Web

* **Cortafuegos Puesto la Marmota:** Utilizando el filtro VARI, permite visualizar el estado del cortafuegos para comprobar si está limpio o si necesita labores de mantenimiento.
* **Pinares:** Permite observar y evaluar la salud vegetal de campos de cultivo mediante la aplicación del filtro VARI.
* **Cerro Ledaña:** Muestra gemelos digitales de edificios emblemáticos, ideal para conservar copias digitales precisas de nuestro patrimonio histórico.
* **Villalgordo 2:** Permite visualizar cauces de ríos para comprobar sus caudales, analizar variaciones y observar cambios físicos en el terreno a través de diferentes periodos de tiempo.
  
---

## 🚀 Características Principales

* **Visualización Masiva:** Renderizado optimizado de *Digital Twins*.
* **Análisis en Tiempo Real (Shaders):** Implementación de shaders personalizados en GLSL directamente en la GPU del cliente. Incluye:
    * **Filtro VARI:** para la detección de estrés hídrico y salud vegetal sin necesidad de sensores multiespectrales.
    * **Filtro de Agua:** Algoritmo diseñado específicamente para resaltar y analizar masas y cuerpos hídricos en el terreno.
* **Hardware Agnostic y Accesible:** Compatible con capturas de cualquier plataforma UAV (DJI, FPV, etc.) capaz de realizar vuelos autónomos con solape >70%. Todo el sistema está pensado para ser accesible: **es posible recopilar información con drones económicos desde unos 300 euros**, alcanzando a escanear unas **150 hectáreas por hora de vuelo**.
* **Georreferenciación Precisa:** Superposición exacta sobre capas base cartográficas.

---

## 🛠️ Stack Tecnológico

La arquitectura es modular, priorizando herramientas que trabajen de forma automática requiriendo una mínima intervención humana:

| Capa | Tecnología | Función |
| :--- | :--- | :--- |
| **Cliente Web** | **CesiumJS** | Motor de globo virtual 3D y renderizado WebGL. |
| **Procesamiento** | **RealityScan** | Generación de mallas texturizadas a partir de fotogrametría. |
| **Formato** | **.GLB / 3D Tiles** | Exportación optimizada para visualización web. |
| **Backend/Hosting** | **Cesium Ion** | Alojamiento y streaming de activos pesados. |
| **Despliegue** | **GitHub Pages** | Hosting del cliente web estático. |

---

## 🖱️ Controles

* **Click Derecho:** Zoom.
* **Click Izquierdo:** Arrastrar mapa.
* **rueda del ratón:** Zoom in / Zoom out.
* **Click Rueda / Click Central:** Rotar e inclinar la cámara (Tilt) para vistas 3D.
* **Panel UI:** Interfaz interactiva desde la que puedes activar o desactivar las capas de análisis (como el filtro VARI o el filtro de agua), alternar el modo de visualización con un botón dedicado, y modificar con precisión la altura del modelo 3D utilizando un *slider*.

