function Feedback({feedback, author, age}) {
    return <div className="feedbackContainer">
        <div className="feedbackText">
            <p>" {feedback} "</p>
        </div>
        <div className="feedbackAuthor">
            <p>{`${author}, ${age}`}</p>
        </div>
    </div>;
}

export default Feedback