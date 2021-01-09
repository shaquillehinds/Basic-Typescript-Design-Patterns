// instructions to every other class
// on how they can be an argument to 'addMarker'
export interface Mappable {
  name?: string;
  companyName?: string;
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  color: string;
}

export class CustomMap {
  private googleMap: google.maps.Map;
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 0,
      center: { lat: 0, lng: 0 },
    });
  }
  addMarker(mappable: Mappable): void {
    const title = mappable.name || mappable.companyName || "Marker";
    const position = mappable.location;
    const marker = new google.maps.Marker({ map: this.googleMap, title, position });
    marker.addListener("click", () => {
      const content = mappable.markerContent();
      const infoWindow = new google.maps.InfoWindow({ content });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
