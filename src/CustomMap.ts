interface MapInfo{
  location:{
    lat: number,
    lng: number
  }
  content():string,
}

export class CustomMap {
  private googleMap: google.maps.Map

  constructor(divId:string) {
    this.googleMap=new google.maps.Map(document.getElementById(divId) as HTMLElement, {
      center: { lat: 0, lng: 0},
      zoom: 1,
    })
  }

  addMarker(mapInfo:MapInfo):void{
    const marker = new google.maps.Marker({
      map:this.googleMap,
      position:{
        lat: mapInfo.location.lat,
        lng: mapInfo.location.lng,
      }
    })
    marker.addListener("click",() => {
      const infoWindow = new google.maps.InfoWindow({
        content:mapInfo.content()
      })
      infoWindow.open(this.googleMap, marker)
    })
  }
}