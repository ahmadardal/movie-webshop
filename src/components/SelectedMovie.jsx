import "../styles/SelectedMovie.css";
import StarRating from "./reusableComponents/starrating";
import FeedbackCard from "./FeedbackCard";
import FeedbackForm from "./FeedbackForm";
// import { db } from "../firebase-config";
// import { collection, getDocs, addDoc } from "firebase/firestore";

const SelectedMovie = () => {

    // const FeedbackForm = ({ id }) => {
    //     const [comment, SetComment] = useState("");
    //     const [comments, setComments] = useState([]);
    //     const [rating, setRating] = useState(2);
    //     const [textName, setTextName] = useState("");
    //     const [age, SetAge] = useState(0);
    //     const collectionRef = collection(db, "comments");
    // }

    // useEffect(() => {
    //     const getComments = async () => {
    //       const data = await getDocs(collectionRef);
    //       setComments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    //     };
    
    //     getComments();
    //   }, []);

    return (
        <div className="selected-movie-container">  
            <div className="background-image-container">      
               <img className="background-image-sm" src={require("../assets/img2.jpg")} />
            </div>
            <div className="background-info-container">
                <div className="selected-movie-info">
                    <div className="title-rating">
                        <h1>Title</h1>
                        <StarRating movieRating={2.7} size={'medium-star-rating'} /> 
                    </div>
                    <div className="price">  
                        <h1>Pris 47 kr</h1>
                        <button>Lägg till</button>
                    </div>     
                </div>   
            <div className="movie-info">
                <p>Här ska det tas in info om filmen</p>
            </div>
            <div className="feedback-div">
                <div className="movie-feedback">
                    <FeedbackForm />
                </div>
                <div className="feedback-info">
                    <h1>Recensioner</h1>
                    <FeedbackCard className="FeedbackCard" />
                </div>
            </div>
            </div>
        </div>
    )
}

export default SelectedMovie