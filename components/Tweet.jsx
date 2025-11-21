import styles from "../styles/Tweet.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addTweet } from "../reducers/tweet";
import { useEffect, useState } from "react";
import TweetTemplate from "../components/TweetTemplate";

function Tweet() {
  const dispatch = useDispatch();
  const [content, SetContent] = useState("");
  const tweet = useSelector((state) => state.tweet.value);
  const token = useSelector((state) => state.user.value.token);

  const [tweets, setTweets] = useState([]);
  console.log(tweets);

    useEffect( () => {
      const fetchTweets = async() => {
          const response = await fetch("http://localhost:3000/tweet/allTweets");
      const data = await response.json();
      setTweets(data.filter((data, i ) => i>0))

      }
      fetchTweets()
    }, []);

  const allTweets = tweets.map((data, i) => {
    return <TweetTemplate key={i} {...data} />;
  });

  const tweetClick = async () => {
    if (!content || content.length > 280){
        return <p> Le message est trop long</p>
    }
    try {
      const response = await fetch("http://localhost:3000/tweet/addTweet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content, token }),
      });
      const data = await response.json();

      if (data.result) {
        dispatch(addTweet());
        console.log(content);
        SetContent("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerInput}>
        <div className={styles.title}>
          <h1> Home</h1>
        </div>
        <div className={styles.input}>
          <input
            type="text"
            className={styles.inputTxt}
            placeholder="What's up ?"
            onChange={(e) => SetContent(e.target.value)}
            value={content}
          />
        </div>
        <div className={styles.tweetContainer}>
          <p>{content.length}/280</p>
          <button onClick={tweetClick} className={styles.tweetBtn}>Tweet</button>
        </div>
              <TweetTemplate></TweetTemplate>
      </div>
      <div>{allTweets}</div>
    </div>
  );
}

export default Tweet;
