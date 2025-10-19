import './App.css'
import axios from 'axios'
import React from "react";

function App() {
    const [success, setSuccess] = React.useState("");
    const [error, setError] = React.useState("");
    const [deleteSuccess, setDeleteSuccess] = React.useState(false);

    async function getData() {
        try {
            const response = await axios.get('https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts',
                {
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

    async function addPost() {
        try {
            const response = await axios.post('https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts',
                {
                    "title": "Wat gebruiker heeft ingevuld",
                    "subtitle": "Wat gebruiker heeft ingevuld",
                    "content": "Wat gebruiker heeft ingevuld, in dit geval minder dan 100 woorden",
                    "author": "Voornaam achternaam",
                    "created": "2023-09-21T09:30:00Z",
                    "readTime": 1,
                    "comments": 0,
                    "shares": 0
                },
                {
                    headers: {
                        'novi-education-project-id': "d6200c4d-2a0a-435d-aba6-6171c6a7296e"
                    },
                })
            setSuccess("true")
            console.log(response.data)
        } catch (e) {
            console.log('Fout bij het plaatsten van de blog', e)
            setError("Het is niet gelukt om jouw blog te plaatsen")
        }
    }

    async function deletePost() {
        try {
            const response = await axios.delete('https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts/21', {
                headers: {
                    'novi-education-project-id': "d6200c4d-2a0a-435d-aba6-171c6a7296e"
                }
            })
            setDeleteSuccess("Blogpost is succesvol verwijderd")
        } catch (e) {
            console.log('Fout bij het verwijderen van de blog', e)
        }
    }

    return (
        <>
            <div className="button-section">
                <button type="button" onClick={getData}>Haal blogs op</button>
                <button type="button" onClick={getPost}>Haal post 6 op</button>
                <button type="button" onClick={addPost}>Plaats blogs post</button>
                <button type="button" onClick={deletePost}>Verwijder blog</button>
                {success ? <p>Successfully added.</p> : <p>{error}</p>}
                {deleteSuccess ? <p>Post is succesvol verwijderd</p> : ""}
            </div>
        </>
    )
}

export default App
