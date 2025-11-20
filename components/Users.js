import styles from '../styles/Users.module.css';

function Users() {
    return (
        <div className={styles.container}>

            <div className={styles.logo}>
                <img src='/logox.png' className={styles.img} />
            </div>


            <div className={styles.Users}>

                <div className={styles.caseUsers}>
                    <img src='/utilisateur.png' className={styles.avatar} />
                    <div className={styles.presentation}>
                        <h5 className={styles.utilisateur}>Users</h5>
                        <p className={styles.email}>email</p>
                    </div>

                </div>
                <div>
                    <button>logout</button>
                </div>


            </div>


        </div>


    );
}







export default Users;