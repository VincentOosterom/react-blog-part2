import './App.css'
import axios from 'axios'
import React from "react";

function App() {
    const [success, setSuccess] = React.useState("");
    const [error, setError] = React.useState("");
    const [deleteSuccess, setDeleteSuccess] = React.useState(false);

    const [updateSuccess, setUpdateSuccess] = React.useState(false);
    const [errorUpdate, setErrorUpdate] = React.useState(false);

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
            console.log("Hier is post nummer 6", response.data)
        } catch (e) {
            console.log('Fout bij het ophalen van de blog nummer 6', e)

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

    async function updatePost() {
        try {
            const respone = await axios.put('https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts/18',
                {
                    "title": "Post is gewijzigd",
                    "subtitle": "Wat gebruiker heeft ingevuld",
                    "content": "Wat gebruiker heeft ingevuld, in dit geval minder dan 100 woorden",
                    "author": "Vincent Oosterom",
                    "created": "2023-09-21T09:30:00Z",
                    "readTime": 1,
                    "comments": 0,
                    "shares": 0,
                    "id": 18,
                }, {
                    headers: {
                        'novi-education-project-id': "d6200c4d-2a0a-435d-aba6-6171c6a7296e"
                    }
                })
            console.log("Post is gewijzigd")
            setUpdateSuccess("true")
        } catch (e) {
            console.log('Het is niet gelukt om de post te wijzigen', e)
            setErrorUpdate("Het is niet gelukt om jouw post te wijzigen")

        }
    }

    return (
        <>
            <div className="button-section">
                <button type="button" onClick={getData}>Haal blogs op</button>
                <button type="button" onClick={getPost}>Haal post 6 op</button>
                <button type="button" onClick={addPost}>Plaats blogs post</button>
                <button type="button" onClick={deletePost}>Verwijder blog</button>
                <button type="button" onClick={updatePost}>Wijzig post</button>

                {success ? <p>Blog is succesvol geplaatst</p> : <p>{error}</p>}
                {deleteSuccess ? <p>Post is succesvol verwijderd</p> : ""}
                {updateSuccess ? <p>Post is succesvol geupdate</p> : ""}
                {errorUpdate ? <p>Post is niet geupdate</p> : ""}
            </div>
        </>
    )
}

export default App
