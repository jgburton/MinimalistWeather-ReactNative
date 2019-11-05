import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { API_KEY } from './utils/WeatherAPIKey';
// import Weather from './components/Weather';

const App = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [temperature, setTemperature] = useState(0);
    const [weatherCondition, setWeatherCondition] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            position => {
                fetchWeather(51.515579, -0.128360);
            },
            error => {
                setError('Error getting Weather Conditions');
            }
        );
    });

    const fetchWeather = (lat, lon) => {
        fetch(
            `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
        )
            .then(res => res.json())
            .then(json => {
                console.log(json);
            });
    };


    return (
        <View style={styles.container}>
            {isLoading ? (
                <View style={styles.loadingContainer}>
                    <Text style={styles.loadingText}>Fetching the Weather...</Text>
                </View>
            ) : (
                    <View style={styles.loadingContainer}>
                        <Text style={styles.loadingText}>All good...</Text>
                    </View>
                )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFDE4'
    },
    loadingText: {
        fontSize: 30,
    }
});

export default App;