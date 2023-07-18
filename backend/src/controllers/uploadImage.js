async function upload  (req, res) {
    const { file } = req.body
try {
    const url = await axios.post("https://api.imgbb.com/1/upload?expiration=600&key=356b438b403ef6051e320883727e876d")
    
} catch (error) {
    
}
}