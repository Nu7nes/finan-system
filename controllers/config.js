const getTime = async (req, res) => {
    let timestamp = new Date().getTime();
    try{
        await res.json(JSON.stringify(timestamp));
    } catch (error) {
        res.send(error);
    }
}

export default { getTime }

// mude para um pacote
// ---------------------PROCURE POR MOMENT--------------------