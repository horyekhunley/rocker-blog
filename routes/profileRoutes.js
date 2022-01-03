const router = require("express").Router();
const { ensureAuthenticated } = require("../middleware/authMiddleware");
const {validationRules, validate }  = require("../validations/update-user-validator");
const { getOne, updateOne } = require("../controllers/profilesCtrl");


router.get("/profile", ensureAuthenticated, async (req, res) => {    
    /*  #swagger.tags = ['Profile']
        #swagger.security = [{
        "Authorization": []
        }]
    */   
    await getOne(req, res);
});


router.put("/profile", ensureAuthenticated, validationRules(), validate, async (req, res) => {   
    /*  #swagger.tags = ['Profile']
        #swagger.security = [{
        "Authorization": []
        }]
    	#swagger.parameters['obj'] = {
            in: 'body',
            required: true,
            schema: { $ref: "#/definitions/UpdateUserModel" }
    } */   
    
    await updateOne(req, res);
});

module.exports = router;