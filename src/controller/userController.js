const handleDate = (req, res) => {
    const { data } = req.params;

    let date = new Date(data);

    if (date.toString() === 'Invalid Date') {
        date = new Date(parseInt(data));
    }

    if (date.toString() === 'Invalid Date') {
        return res.json({
            error: 'Invalid Date'
        });
    } else {
        return res.json({
            unix: date.getTime(),
            utc: date.toUTCString()
        });
    }
};
