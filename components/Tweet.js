import styles from '../styles/Tweet.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addTweet } from '../reducers/tweet';
import { useState } from 'react';

function Tweet() {
    const dispatch = useDispatch();
    const [content, SetContent] = useState('')
    const tweet = useSelector((state) => state.tweet.value)
    const token = useSelector((state) => state.user.value.token)

    const tweetClick = async () => {
        // if (!content || content.length > 280){
        //     return res.status(400).json({error: 'Champ vide ou trop long'})
        // }
        try{
            const response = await fetch('http://localhost:3000/tweet/addTweet', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({ content, token, })
        })
        const data = await response.json();

        if (data.result){
            dispatch(addTweet())
            SetContent('')
        }
        } catch (error) {
            console.log(error);
           
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
                    <button onClick={tweetClick}>Tweet</button>
                </div>
            </div>
            <div>
                {tweet}
            </div>

        
        </div>

    );
}



export default Tweet;