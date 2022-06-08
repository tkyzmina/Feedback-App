import { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackContext from "./context/FeedbackContext";
import Spinner from "./shared/Spinner";

function FeedbackList() {
  const { feedback, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback yet.</p>;
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <ul className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => {
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <li key={item.id}>
                <FeedbackItem item={item} />
              </li>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </ul>
  );

  // return (
  //   <ul className="feedback-list">
  //     {feedback.map((item) => {
  //       return (
  //         <li key={item.id}>
  //           <FeedbackItem item={item} handleDelete={handleDelete} />
  //         </li>
  //       );
  //     })}
  //   </ul>
  // );
}

export default FeedbackList;
