import OpenAI from "openai";

const openai = new OpenAI({ apiKey: import.meta.env.VITE_OPENAI_API_KEY, dangerouslyAllowBrowser: true });

async function generateAi(prompt) {
    const completion = await openai.chat.completions.create({
        messages: [{ "role": "system", "content": "You are a helpful assistant from a tourist webpage in the world." },
        { "role": "user", "content": "please use this format always for your responses in a json format: [{'name':'Circuito Comercial','type':'Turístico','location':{'lat':-27.3593327,'lng':-55.8489188},'description':'Zona baja de Encarnación, conocida por ser un punto de encuentro para turismo de compras.','address':'Zona baja de Encarnación'}, another one]" },
        { "role": "assistant", "content": "Sure i can do that" },
        { "role": "user", "content": prompt }],
        model: "gpt-4o-mini",
        response_format: { type: "json_object" }
    });
    let respuesta = JSON.parse(completion.choices[0].message.content)
    return (respuesta[Object.keys(respuesta)[0]]);
}



export default generateAi;