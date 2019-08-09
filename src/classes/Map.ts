export interface Location {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  color: string,
}

export class Map {
  private map: google.maps.Map;

  constructor(element: string) {
    const latlng = new google.maps.LatLng(43.305, -79.617);

    this.map = new google.maps.Map(document.getElementById(element), {
      center: latlng,
      zoom: 1
    });
  }

  addMarker(marker: Location) {
    const mapAnchor = new google.maps.Marker({
      map: this.map,
      position: {
        lat: marker.location.lat,
        lng: marker.location.lng
      }
    });

    mapAnchor.addListener('click', () => {
      const infoWindowModal = new google.maps.InfoWindow({
        content: marker.markerContent()
      })

      infoWindowModal.open(this.map, mapAnchor);
    })
  }
}