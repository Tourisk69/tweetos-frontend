import { use, useState } from 'react';
import styles from '../styles/Tweet.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addTweet } from '../reducers/tweet';

function Tweet() {
    const dispatch = useDispatch();
    const [content, SetContent] = useState('')

    const tweetClick = async () => {
        if (!content || content.length > 280){
            return res.status(400).json({error: 'Champ vide ou trop long'})
        }
        try{
            const response = await fetch('http://localhost:3000/', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: { content }
        })
        const data = await response.json();

        if (data.result){
            dispatch(addTweet(props))

        }
        } catch (error) {
            console.log(error);
            res.status(500).json({error: "Erreur Serveur"})
        }
        
    }


    return(
        <div className={styles.container}>
            <div>
                <div>
                    <h1> home</h1>
                </div>
                <div>
                    <input type="text" />
                </div>
                <div>
                    <p>longueur du tweet</p>
                    <button>Tweet</button>
                </div>
            </div>
            <div>
                
            </div>

        
        </div>

    );
}



export default Tweet;