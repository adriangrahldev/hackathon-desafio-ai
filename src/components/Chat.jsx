import { Textarea } from "@headlessui/react";
import { useState } from "react";
import generateAi from "../utils/modelConfig.js";
import LoaderModal from "./LoaderModal.jsx";
import Card from "./Card.jsx";
import SendIcon from "./SendIcon.jsx";

const Chat = ({ setPlaces, locations }) => {
  const [prompt, setPrompt] = useState("");
  const [messageSent, setMessageSent] = useState(false);
  const [isLoading, setOnload] = useState(false);

  const handleChange = (e) => {
    setPrompt(e.target.value);
    setMessageSent(false);
  };

  const handleSubmit = async (e) => {
    setOnload(true);
    e.preventDefault();
    console.log(prompt);
    setPrompt("");
    setMessageSent(true);
    setPlaces(await generateAi(prompt));
    setOnload(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="w-2/5 flex flex-col h-full">
      <section className="p-2 my-5 h-full">
        <LoaderModal isOpen={isLoading} text="Cargando" />
      </section>

      <section className="w-full grid grid-cols-2 mx-2 mb-2">
        {locations.map((card, index) => (
          <Card
            key={index}
            nombre={card.name}
            tipo={card.type}
            direccion={card.address}
            descripcion={card.description}
          />
        ))}
      </section>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-end border-2 mx-2 border-slate-200 rounded-md"
      >
        <Textarea
          className="w-4/5 h-fit px-1 resize-none"
          placeholder="Type a message..."
          value={prompt}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
        />
        <button className="w-auto h-10 mx-auto" type="submit">
          <SendIcon></SendIcon>
        </button>
      </form>
    </div>
  );
};

export default Chat;
