import * as React from 'react'
import {StaticMap, Marker} from 'react-map-gl'
import Icon from './Icon'
import 'mapbox-gl/dist/mapbox-gl.css'
import Styles from './Map.module.css'

type Props = {
  className?: string,
  location?: string
}

type Point = {
  latitude: number,
  longitude: number
}

const lookupLocation = async (location: string): Promise<Point | null> => {
  try {
    const url = new URL(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(location)}.json`)
    url.searchParams.append('access_token', process.env.MAPBOX_TOKEN!)
    url.searchParams.append('autocomplete', 'false')
    url.searchParams.append('fuzzyMatch', 'true')
    const response = await fetch(url.href)
    const json = await response.json()
    const feature = json.features[0]
    if (!feature) throw Error('Not Found')
    return {
      latitude: feature.center[1],
      longitude: feature.center[0],
    }
  } catch (e) {
    return null
  }
}

export default (props: Props) => {
  if (!props.location) return <></>

  const [point, setPoint] = React.useState<Point | null>(null)

  React.useEffect(() => {
    if (!props.location) return
    lookupLocation(props.location).then(setPoint)
  }, [props.location])

  if (point !== null) {
    return (
      <StaticMap
        mapboxApiAccessToken={process.env.MAPBOX_TOKEN!}
        className={props.className}
        width="100%"
        height="100%"
        latitude={point.latitude}
        longitude={point.longitude}
        mapStyle="mapbox://styles/mapbox/streets-v10"
        zoom={15}>
        <Marker
          latitude={point.latitude}
          longitude={point.longitude}
          offsetTop={-40}
          offsetLeft={-20}>
            <div className={Styles.marker}>
              <Icon
                icon="place"
                size={40}
                color="var(--color-yellow)"/>
            </div>
        </Marker>
      </StaticMap>
    )
  } else {
    return <></>
  }
}