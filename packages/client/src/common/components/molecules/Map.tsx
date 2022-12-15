import MapDeveloper from "./MapDeveloper";

ymaps.ready(init);
function init(){
    let myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 7,
        controls: [],
    });
    // Создание геообъекта с типом точка (метка).
    let myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [55.8, 37.8] // координаты точки
        },
    });
    let myGeoObject2 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [56.9, 33.1] // координаты точки
        },
    });
    // Размещение геообъектов на карте.
    myMap.geoObjects.add(myGeoObject); 
    myMap.geoObjects.add(myGeoObject2); 
}

const Map = () => {
    return (
        <div className="container mx-auto">
            <div className="flex flex-col relative">
                <h2 className="text-white-text font-bold text-4xl mb-8">Locations</h2>
                <div className="w-100% h-[700px] flex flex-col items-center z-10" id="map">
                    <ul className="w-[824px] h-[75px] rounded-2xl bg-dark-bg absolute bottom-8 mx-auto flex z-20 justify-between py-4 px-8 lg:flex-wrap lg:w-96 lg:h-40">
                        <MapDeveloper name='Almas Saparov' address='Uralsk, Kazakhstan'/>
                        <MapDeveloper name='Almas Saparov' address='Uralsk, Kazakhstan'/>
                        <MapDeveloper name='Almas Saparov' address='Uralsk, Kazakhstan'/>
                        <MapDeveloper name='Almas Saparov' address='Uralsk, Kazakhstan'/>
                    </ul>
                </div>  
            </div>
            <p className="text-behind lg:hidden select-none pointer-events-none">AROUND THE WORLD</p> 
        </div>
    ); 
};

export default Map;
