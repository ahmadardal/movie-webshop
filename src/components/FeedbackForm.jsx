import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { feedbackActions } from "../state/reducers/feedbackReducer";
import "../styles/FeedbackForm.css";
import ReactStars from "react-rating-stars-component";
import { db } from "./firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";

// kommentar
const FeedbackForm = ({ movieId, setFeedbackhidden, feedbackhidden }) => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [rating, setRating] = useState(0);
  const [textName, setTextName] = useState("");
  const [age, SetAge] = useState(0);
  const collectionRef = collection(db, "comments");


  const commentsFromFirebase = useSelector((state) => state.yorumlar)



  useEffect(() => {
    const getComments = async () => {
      const data = await getDocs(collectionRef);
      setComments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getComments();
  }, []);

  const saveComments = async () => {
    if (textName === "", comment === "", rating === 0, age > 99, age < 2) {
      alert("Please fylla i alla fältet")
    } else {
      await addDoc(collectionRef, {
        movieId: movieId,
        name: textName,
        age: age,
        comment: comment,
        rate: rating,
        date: Date.now()
      })
        .then(() => {
          setRating(0)
          setTextName("")
          setComment("")
          setFeedbackhidden(true)
        })
        .catch(() => {
          alert("Unsuccessfully");
        });
    }
    // Vi får lägga till id här ->

  };

  return (
    <div className="mainContainer" style={{ maxWidth: 350 }}>
      <div className="name">
        <label>Name : </label>
        <input
          type="text"
          required
          value={textName}
          onChange={(e) =>{setTextName(e.currentTarget.value)}}
        />
      </div>
      <div className="age">
        <label> Age : </label>
        <input
          type="number"
          min={1}
          max={90}
          value={age}
          onChange={(e) => {
            SetAge(e.target.value);
          }}
          style={{ width: 50 }}
        />
      </div>

      <div className="stars">
        <label>
          {" "}
          Your rate :
          <ReactStars
            activeColor="#f7be00"
            value={rating}
            count={5}
            size={30}
            isHalf={true}
            onChange={(rating) => {
              setRating(rating);
            }}
          />
        </label>
      </div>

      <div className="comments">
        <label style={{}}>Comment : </label>
        <textarea
          type="textarea"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
          required
          style={{ height: 100, width: 250 }}
        />
      </div>
      <div style={{}} className="submitButton">
        <button onClick={textName !== "" && comment!=="" && rating !== 0 && saveComments}> Skicka </button> 
       
       <br />

       <button onClick={() => {setFeedbackhidden(!feedbackhidden)}}>Cancel</button>
      </div>
    </div>
  );
};

export default FeedbackForm;
