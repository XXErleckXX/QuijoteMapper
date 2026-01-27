Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1ODg2ZjNiOC0wOGQwLTRkNDktYjA3OS0zODQ0NmE0MmE3NTEiLCJpZCI6MzgxMzQxLCJpYXQiOjE3Njg5Mzc3NjB9.jNxFY01Mofq_1z1aT6Ni-F-x_TfGZh1GMmyU59xs4-w';

const viewer = new Cesium.Viewer('cesiumContainer', {
    terrain: undefined,           
    animation: false,
    timeline: false,
    geocoder: true,
    navigationHelpButton: true,
    baseLayerPicker: false,
    homeButton: false,
    sceneModePicker: false
});

viewer.camera.setView({
    destination: Cesium.Cartesian3.fromDegrees(-4, 40, 18000000)
});

const modelos = {
    4365574: 'Villalgordo 1',
    4365575: 'Villalgordo 2', 
    4365576: 'Minaya',
    4365588: 'Pinares'
};

let tilesetActual = null; 

window.cargarModelo = async id => {
    try {
        if (tilesetActual) {
            viewer.scene.primitives.remove(tilesetActual);
            tilesetActual = null;
        }

        console.log("Cargando " + modelos[id] + " (ID: " + id + ")...");

        tilesetActual = viewer.scene.primitives.add(
            await Cesium.Cesium3DTileset.fromIonAssetId(id)
        );

        await tilesetActual.readyPromise;
        
        viewer.zoomTo(tilesetActual);
        
    } catch (error) {
        console.error('Error cargando modelo:', error);
    }
};

window.irMundo = () => {
    if (tilesetActual) {
        viewer.scene.primitives.remove(tilesetActual);
        tilesetActual = null;
    }
    
    viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(-4, 40, 18000000),
        duration: 2
    });
};