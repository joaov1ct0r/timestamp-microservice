const handleDate = (req, res) => {
    if (!Date.parse(req.params.date) && !Number(req.params.date)) {
        return res.json({ error: 'Invalid Date' });
    } else if (!/[-]/.test(req.params.date) && Number(req.params.date)) {
        let date = new Date(Number(req.params.date));

        return res.json({
            unix: date.getTime(),
            utc: date.toUTCString()
        });
    }

    let date = new Date(req.params.date);

    res.json({
        unix: date.getTime(),
        utc: date.toUTCString()
    });
};

const handleNullDate = (req, res) => {
    const date = new Date();

    res.json({
        unix: date.getTime(),
        utc: date.toUTCString()
    });
};

export { handleDate, handleNullDate };
