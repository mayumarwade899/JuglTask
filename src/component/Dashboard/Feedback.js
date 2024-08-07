import React from "react";

const feedbacks = [
  {
    icon: <img src="/icons/profile.png" alt="icon" />,
    name: "Jenny Wilson",
    comment:
      "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten free) which was also very good. They were very conscientious about gluten allergies.",
    rating: 5,
  },
  {
    icon: <img src="/icons/profile1.png" alt="icon" className="w-8"/>,
    name: "Dianne Russell",
    comment:
      "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.",
    rating: 4,
  },
  {
    icon: <img src="/icons/profile2.png" alt="icon" className="w-8"/>,
    name: "Devon Lane",
    comment:
      "Normally wings are wings, but theirs are lean meaty and tender, and their selection of sauces is excellent.",
    rating: 4,
  },
  {
    icon: <img src="/icons/profile3.png" alt="icon" className="w-8"/>,
    name: "Jhon Wick",
    comment:
      "Normally wings are wings, but theirs are lean meaty and tender, and their selection of sauces is excellent.",
    rating: 3,
  },
  {
    icon: <img src="/icons/profile4.png" alt="icon" className="w-8"/>,
    name: "Aston Martin",
    comment:
      "Normally wings are wings, but theirs are lean meaty and tender, and their selection of sauces is excellent.",
    rating: 4,
  },
];

const Feedback = () => {
  return (
    <div className="bg-[#1f2029] text-white px-4 rounded-md md:w-full w-[358px] overflow-y-auto h-80">
      <h3 className="text-2xl py-4 pb-2 sticky top-0 bg-[#1f2029]">
        Customer's Feedback
      </h3>
      <div>
        <ul>
          {feedbacks.map((feedback, index) => (
            <li key={index} className="mb-4 ">
              <span className="flex gap-2 mb-2">
                {feedback.icon}
                <h4 className="text-lg">{feedback.name}</h4>
              </span>
              <p className="text-sm text-gray-400">{feedback.comment}</p>
              <div className="flex text-2xl pb-2 border-b-[1px] border-b-gray-800">
                {[...Array(feedback.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500">
                    ★
                  </span>
                ))}
                {[...Array(5 - feedback.rating)].map((_, i) => (
                  <span key={i} className="text-gray-500 ">
                    ★
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Feedback;
