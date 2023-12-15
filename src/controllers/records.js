const Records = require("../model/fiveThousandRecords");

exports.findAll = async (req, res) => {
  try {
    const allRecords = await Records.find({});
    res.status(200).send(allRecords);
  } catch (e) {
    res.status(400).send(e)
  }
};

exports.add=async(req,res)=>{
    let newRecord=new Records(req.body);
    try{
        const record=await newRecord.save();
        res.status(200).send(newRecord)
    }catch(e){
        res.status(400).send(e)
    }

}
exports.deleteReconds = async (req, res) => {
  const { body } = req;
  try {
    const remainingRecords = await Records.findByIdAndDelete(body._id );
    res.status(200).send(remainingRecords);
  } catch (e) {
    res.status(400).send(e)
  }
};

exports.updateRecords = async (req,res) => {
  const { body } = req;
  const obj = {...body}
  delete obj._id 
  try {
    const updeted = await Records.findByIdAndUpdate({ _id: body._id }, obj, {
      new: true,
      upsert: true,
    });
    res.status(200).send(updeted);
  } catch (e) {
    res.status(400).send(e)
  }
};
