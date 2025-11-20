import styles from '../styles/Tweet.module.css';

function Tweet() {
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
        
        </div>

    );
}



export default Tweet;