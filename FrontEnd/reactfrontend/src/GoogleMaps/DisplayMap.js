/*import React,{Component} from 'react'; 
import { Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class DisplayMap extends Component {
    state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
      };
    
      onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
    
    onClose = props => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
      }
    };

    render() {
        return (
          <Map
            google={this.props.google}
            zoom={14}
            initialCenter={{ lat: 17.397091, lng: 78.472365 }}
          >
            <Marker
              onClick={this.onMarkerClick}
              name={'Kenyatta International Convention Centre'}
            />
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
              </div>
            </InfoWindow>
          </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAXBey9szTNKOLqieNydvA5tiE5H6ROJTY'
  })(DisplayMap);
*/
import React, { Component } from 'react';
import Map from './Map';

class DisplayMap extends Component {

	render() {
		return(
			<div style={{ margin: '100px' }}>
				<Map
					google={this.props.google}
					center={{lat: 17.397091, lng: 78.472365}}
					height='300px'
					zoom={15}
				/>
			</div>
		);
	}
}

export default DisplayMap;