
const handlefree = async (req, res) => {
    const { trial } = req.body;

    console.log(trial);

    if (!trial) {
        return res.redirect("/upgrade");
    }

    req.session.trial = true;

    return res.redirect("/");
};
module.exports={
    handlefree,
}