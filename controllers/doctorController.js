const Doctor = require('./../models/doctorModels');


exports.getAllDoctor = async (req, res) => {
   try{ 
    console.log(req.query);

    const doctors = await Doctor.find({
        duration: 5,
        difficulty: 'easy'
    });

    res.status(200).json({
        status: 'success',
        result: doctors.length,
        data:{
            doctors
        }
    });
} catch (err){
    res.status(400).json({
        status: 'fail',
        message: 'invalid data sent!'
    });
}

};


exports.getDoctor = async (req, res) => {
  try {
   const doctor = await Doctor.findById(req.params.id);
   
   res.status(200).json({
    status: 'success',
    data:{
        doctor
    }
});

  }  catch (err){
    res.status(400).json({
        status: 'fail',
        message: err
    });
}
    // const doc = healthmeds.find(el => el.id === id);

    // res.status(200).json({
    //     status: 'success',
    //     data:{
    //       doc
    //     }
    // });
};

exports.createDoctor = async (req, res)=>{
    try{

    // const newDoctor = new Doctor({})
    // newDoctor.save

    const newDoctor = await Doctor.create(req.body);

    res.status(201).json({
        status: 'success',
        data:{
            healthmeds: newDoctor
        }
    });
} catch (err){
    res.status(400).json({
        status: 'fail',
        message: 'invalid data sent!'
    });
}
}; 

exports.updateDoctor = async (req, res) => {
    try {

      const doctor = await  Doctor.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
            runValidators:true 
        });
        
        res.status(200).json({
        status: 'success',
        data: {
          doc :doctor
        }
    });
    } catch (err){
        res.status(400).json({
            status: 'fail',
            message: 'invalid data sent!'
        });
    }
};

exports.deleteDoctor = async  (req, res) => {
    try{
        await Doctor.findByIdAndDelete(req.params.id);
        
    res.status(204).json({
            status: 'success',
            data: null
        });

    } catch(err){
        res.status(400).json({
            status: 'fail',
            message: 'error'
        });
    } 
};