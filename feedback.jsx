import React, { useEffect, useRef, useState } from "react";
import Button from "./reusableComponents/button";
import '../styles/feedback.css'
import ReactStars from "react-rating-stars-component";
import { db } from './firebase-config';
import { collection, getDocs, addDoc, doc } from 'firebase/firestore';
import { async } from "@firebase/util";

// kommentar
const Feedback = ({ id }) => {

    const [comment, SetComment] = useState('');
    const [comments, setComments] = useState([]);
    const [rating, setRating] = useState(2);
    const [textName, setTextName] = useState('');
    const [age, SetAge] = useState(0);
    const collectionRef = collection(db, "comments");
    

    useEffect(() => {
        const getComments = async () => {
            const data = await getDocs(collectionRef);
            setComments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getComments();
    }, []);


    const saveComments = async () => {
        // Vi får lägga till id här ->
        await addDoc(collectionRef, { "name": textName, "age": age, "comment": comment, "rate": rating })
            .then(() => {
                alert('Successfully')
            })
            .catch(() => {
                alert("Unsuccessfully")
            })
    }

    return (
        <div className="mainContainer" style={{maxWidth:350}}>
            <div className="name">
                <label>Name : </label>
                <input type="text"
                    required
                    value={textName}
                    onChange={e => setTextName(e.currentTarget.value)}
                />
            </div>
            <div className="age">
                <label> Age : </label>
                <input type="number"
                    placeholder="Your age"
                    value={age}
                    onChange={(e) => { SetAge(e.target.value) }}
                    style={{ width: 30 }} />
            </div>


            <div className="stars">
                <label> Your rate :
                    <ReactStars activeColor="blue" count={5} size={30}
                        isHalf={true}
                        onChange={(rating) => { setRating(rating) }} />
                </label>
            </div>


            <div>
                {comments.map((comment) => {
                    return (
                        <div>

                            <h1>Name : {comment.name}</h1>
                            <h1>Age : {comment.age}</h1>
                            <h1>Rate : {comment.rate}</h1>
                            <h1>Comment : {comment.comment}</h1>
                            <div>------</div>
                        </div>
                    )
                })}

            </div>


            <div className="comments">
                <label style={{}}>Comment : </label>
                <textarea type="textarea"
                    value={comment}
                    onChange={e => { SetComment(e.target.value) }}
                    required style={{ height: 100, width: 250 }}
                />
            </div>
            <div className="submitButton">
                <button onClick={saveComments}>  Skicka </button>
            </div>

        </div>

    )


}

export default Feedback;