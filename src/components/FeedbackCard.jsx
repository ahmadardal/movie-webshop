import '../styles/FeedbackCard.css';
function FeedbackCard({feedback, author, age}) {
    return <div className="feedbackContainer">
        <div className="feedbackText">
            <p>" {feedback} "</p>
        </div>
        <div className="feedbackAuthor">
            <p>{`${author}, ${age}`}</p>
        </div>
    </div>;
}

export default FeedbackCard;