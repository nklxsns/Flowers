import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Quiz = () => {
  const navigate = useNavigate();

  const questions = [
    {
      text: "Do you think I’m the funniest person you know?",
      options: ["Yes", "No"],
      type: "yesno",
      toastMessage: "I'm the funniest person you know!",
    },
    {
      text: "Do you think we’d make the cutest couple in a rom-com KDrama?",
      options: ["Yes", "No"],
      type: "yesno",
      toastMessage: "We'd make the cutest couple! 💖",
    },
    {
      text: "What do you want me to get for you on our next date?",
      options: ["KinderJoy", "Chocolate", "Flowers", "Pizza", "Nothing"],
      type: "selectable",
      toastMessage: "I will get you everything anyway! 💜",
    },
    {
      text: "Do you ever imagine us growing old together?",
      options: ["Yes", "No"],
      type: "yesno",
      toastMessage: "Awww, that's so cute! ❤️",
    },
    {
      text: "Do you think our hugs feel magical?",
      options: ["Yes", "No"],
      type: "yesno",
      toastMessage: "Our hugs do feel magical, baby! ✨",
    },
    {
      text: "Need one right now?",
      options: ["Yes"],
      type: "yesno",
      toastMessage: "Here you go! 🤗",
    },
    {
      text: "Do you want Flowers?",
      options: ["Yes", "No"],
      type: "yesno",
      toastMessage: "I knew you wanted Flowers! 🌹",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const [selectedOptions, setSelectedOptions] = useState([]);

  const moveButtonOnHover = () => {
    const x = Math.random() * 300;
    const y = Math.random() * 300;

    setButtonPosition({ x, y });
  };

  const nextQuestion = (option) => {
    setButtonPosition({ x: 0, y: 0 });

    if (option == "Yes") {
      toast.success(questions[currentQuestionIndex].toastMessage);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      if (option === "Yes") {
        navigate("/flowers");
      }
    }
  };

  const handleCheckboxChange = (option) => {
    if (option === "Nothing") return;

    const newSelectedOptions = [...selectedOptions];
    if (newSelectedOptions.includes(option)) {
      setSelectedOptions(newSelectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...newSelectedOptions, option]);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="night flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h3 className="text-xl mb-4">{currentQuestion.text}</h3>
      {currentQuestion.type === "yesno" ? (
        <div className="flex space-x-4">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => nextQuestion(option)}
              onMouseEnter={option === "No" ? moveButtonOnHover : null}
              style={{
                transform:
                  option === "No"
                    ? `translate(${buttonPosition.x}px, ${buttonPosition.y}px)`
                    : "none",
                cursor: option === "No" ? "not-allowed" : "pointer",
              }}
              className="px-4 py-2 bg-purple-500 rounded-lg hover:bg-purple-700 transition duration-300"
            >
              {option}
            </button>
          ))}
        </div>
      ) : (
        <div className="mt-4 flex flex-col">
          <ul className="flex flex-wrap gap-4">
            {currentQuestion.options.map((option, index) => (
              <li key={index} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id={`option-${index}`}
                  checked={selectedOptions.includes(option)}
                  onChange={() => handleCheckboxChange(option)}
                  disabled={option === "Nothing"}
                  className="h-5 w-5 cursor-pointer peer"
                />
                <label
                  htmlFor={`option-${index}`}
                  className="px-4 py-2 cursor-pointer text-xl"
                >
                  {option}
                </label>
              </li>
            ))}
          </ul>
          <button
            onClick={() => nextQuestion("Yes")}
            className="px-4 py-2 mt-4 mx-auto bg-purple-500 rounded-lg hover:bg-purple-700 transition duration-300"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
