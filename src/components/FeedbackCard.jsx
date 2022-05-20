import '../styles/FeedbackCard.css';
import ReactStars from "react-rating-stars-component";
import { db } from "./firebase-config";
import { collection, getDocs, onSnapshot, where, query, doc, orderBy } from "firebase/firestore";
import { useState } from 'react';
import { useEffect } from 'react';


function FeedbackCard({ movieId }) {
    const collectionRef = collection(db, "comments");
    const [comments, setComments] = useState([]);

    const getComments = async () => {
        const q = await query(collectionRef, where("movieId", "==", movieId));
        await onSnapshot(q, (querySnapshot) => {
            setComments(querySnapshot.docs.map((item) => ({ ...item.data() })))
        })
    }

    useEffect(() => {
        getComments();
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
                            <div className='starsAndAuthor'>
                                <div className='reactStars'>{<ReactStars
                                    size={35}
                                    isHalf={true}
                                    edit={false}
                                    value={item.rate}
                                />}</div>
                            <div className="feedbackAuthor">
                                <p>{`${item.name}, ${item.age}`}</p>
                            </div>
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