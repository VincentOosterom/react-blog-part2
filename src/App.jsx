import './App.css'
import axios from 'axios'
import {useState} from "react";

function App() {

    async function getData() {
        try {
            const response = await axios.get('https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts', {
                headers: {
                    'novi-education-project-id': "d6200c4d-2a0a-435d-aba6-6171c6a7296e"
                }
            })
            console.log(response.data)
        } catch (e) {
            console.log('Fout bij het ophalen van de blogs')
        }
    }

    async function getPost() {
        try {
            const response = await axios.get('https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts/6', {
                headers: {
                    'novi-education-project-id': "d6200c4d-2a0a-435d-aba6-6171c6a7296e"
                }
            })
            console.log(response)
        } catch (e) {
            console.log('Fout bij het ophalen van de blogs')
        }
    }

    return (
        <>
            <div className="button-section">
                <button type="button" onClick={getData}>Haal blogs op</button>
                <button type="button" onClick={getPost}>Haal post 6 op</button>
            </div>
        </>
    )
}

export default App
