export const ymaps = window.ymaps;

export const mapInit = () => {
  let myMap = new ymaps.Map("map", {
    center: [55.76, 37.64],
    zoom: 7,
    controls: [],
  });
  // Создание геообъекта с типом точка (метка).
  let myGeoObject = new ymaps.GeoObject({
    geometry: {
      type: "Point",
      coordinates: [55.8, 37.8], // координаты точки
    },
  });
  let myGeoObject2 = new ymaps.GeoObject({
    geometry: {
      type: "Point",
      coordinates: [56.9, 33.1], // координаты точки
    },
  });
  // Размещение геообъектов на карте.
  myMap.geoObjects.add(myGeoObject);
  myMap.geoObjects.add(myGeoObject2);
};
