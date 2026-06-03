import { APIProvider, Map } from '@vis.gl/react-google-maps'


export default function AppContactPage() {

    const apiKeyGoogleMaps = import.meta.env.VITE_API_KEY_GOOGLE_MAPS
    const GoogleMapsId = import.meta.env.VITE_GOOGLE_MAPS_ID

    return (

        <div>
            <h1 className="text-8xl">Contact</h1>
            <APIProvider apiKey={apiKeyGoogleMaps}>
                <Map
                    style={{ width: '100vw', height: '75vh' }}
                    defaultCenter={{ lat: 45.8566, lng: 9.3972 }}
                    mapId={GoogleMapsId}
                    renderingType="VECTOR"
                    defaultZoom={12}
                    disableDefaultUI={true}

                />
            </APIProvider>
        </div>

    )

}