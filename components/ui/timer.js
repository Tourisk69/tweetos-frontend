
export function timeSincePost(createdAt){
    const now= new Date();
    const postDate = new Date(createdAt);
    const diffMs = now = postDate;

    const diffMinutes = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000* 60*60));
    const diffDays = Math.floor(diffMs / (1000* 60 * 60 * 24));

    if(diffMinutes < 1){
        return "a few seond"
    } else if (diffMinutes < 60) {
        return `${diffMinutes} minutes${diffMinutes > 1 ? 's' : ''}`;
     } else if (diffHours <24) {
        return  `${diffHours} heure${diffHours > 1 ? 's' : ''}`;
    }   else {
        return `${diffDays} jour${diffDays > 1 ? 's' : ''}`
        }
    }
    

