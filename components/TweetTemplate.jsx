import styles from "../styles/TweetTemplate.module.css"


   
function TweetTemplate(props) {
 const postTweetDate=()=> {
        const now = new Date();
        const postDate = new Date(props.createdAt);
        const diffMs = now = postDate;

        const diffMinutes = Math.floor(diffMs / (1000 * 60));
        const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

        if (diffMinutes < 1) {
            return "a few seond"
        } else if (diffMinutes < 60) {
            return `${diffMinutes} minutes${diffMinutes > 1 ? 's' : ''}`;
        } else if (diffHours < 24) {
            return `${diffHours} heure${diffHours > 1 ? 's' : ''}`;
        } else {
            return `${diffDays} jour${diffDays > 1 ? 's' : ''}`
        }
    }

    return (
        <div className={styles.TweetTemplate}>
            <div>
                <img src={props.img} className={styles.img} />
                <h4>{props.autor}</h4>
                <p>{props.username}</p>
                <p>{postTweetDate}</p>
            </div>
            <div>
                <p>{props.content}</p>
            </div>
            <div>
                like
            </div>
        </div>
    )
}

export default TweetTemplate;