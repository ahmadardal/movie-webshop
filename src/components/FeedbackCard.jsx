import '../styles/FeedbackCard.css';
import ReactStars from "react-rating-stars-component";
import { db } from "./firebase-config";
import { collection, getDocs, onSnapshot, where, query, doc } from "firebase/firestore";
import { useState } from 'react';
import { useEffect } from 'react';
import { async } from '@firebase/util';


function FeedbackCard({ feedback, author, age, movieId }) {
    const collectionRef = collection(db, "comments");
    const [comments, setComments] = useState([]);

    const getComments = async () => {
        const q = await query(collectionRef, where("movieId", "==", movieId));
        const unsubscribe = await onSnapshot(q, (querySnapshot) => {

            setComments(querySnapshot.docs.map((item) => ({ ...item.data() })))


        })
    }




    useEffect(() => {
        getComments();
        //  unsubscribe();
        // const getComments = async () => {
        //     const data = await getDocs(collectionRef);
        //     setComments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

        // };

        // getComments();
        console.log(comments)
    }, []);


    return (

        <div>

            {
                comments.map((item) => {
                    return (
                        <div className="feedbackContainer">
                            <div className="feedbackText">
                                <p>" {item.comment} "</p>
                            </div>
                            <div>{<ReactStars
                                isHalf={true}
                                edit={false}
                                value={item.rate}
                            />}</div>
                            <div className="feedbackAuthor">
                                <p>{`${item.name}, ${item.age}`}</p>
                            </div>
                        </div>
                    )

                })
            }

        </div>



        // <div className="feedbackContainer">
        //     <div className="feedbackText">

        //         <p>" {feedback} "</p>
        //     </div>
        //     <div className="feedbackAuthor">
        //         <p>{`${author}, ${age}`}</p>
        //     </div>
        // </div>

    )
}

export default FeedbackCard;