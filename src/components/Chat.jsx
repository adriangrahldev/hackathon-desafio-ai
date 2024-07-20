import { Textarea } from "@headlessui/react";
import { useState } from "react";
import generateAi from '../utils/modelConfig.js';
import LoaderModal from "./LoaderModal.jsx";
import Card from "./Card.jsx";
import SendIcon from "./SendIcon.jsx";
import MessageH from "./MessageH.jsx";
import ErrorMsg from "./ErrorMsg.jsx";

const Chat = ({ setPlaces, error }) => {

    const [prompt, setPrompt] = useState("");
    const [isLoading, setOnload] = useState(false);
    const [history, sethistory] = useState([])

    const handleChange = (e) => {
        setPrompt(e.target.value);
    };

    const handleSubmit = async (e) => {
        setOnload(true)
        e.preventDefault();
        console.log(prompt);
        setPrompt("");
        setPlaces(await generateAi(prompt))
        sethistory([...history, prompt])
        setOnload(false)
    }


    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e)
        }
    }

    return (
        <div className='w-1/5 flex flex-col h-full'>
            <section className="p-2 my-5 h-full overflow-auto">
                {history?.map(el => (<MessageH message={el} key={el} />))}
                {error && <ErrorMsg message={"Podrias volver a intentar, recuerda ser claro y conciso"} />}
                <LoaderModal isOpen={isLoading} text="Cargando" />
            </section>

            <form onSubmit={handleSubmit} className="flex items-center justify-end border-2 mx-2 border-slate-200 rounded-md">
                <Textarea
                    className='w-4/5 h-fit px-1 resize-none'
                    placeholder='Type a message...'
                    value={prompt}
                    onChange={handleChange}
                    onKeyDown={handleKeyPress}
                />
                <button className='w-auto h-10 mx-auto' type='submit'>
                    <SendIcon></SendIcon>
                </button>
            </form>
        </div>
    );
};

export default Chat;