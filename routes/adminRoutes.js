const router = require("express").Router();
const { ensureAuthenticated, ensureAuthorized } = require("../middleware/authMiddleware");
const { register } = require("../controllers/authCtrl");

const { getAll, getOne } = require("../controllers/adminCtrl");

router.get("/users", ensureAuthenticated, ensureAuthorized(["admin"]), async(req, res) => {
    /*
        #swagger.tags = ['Admin']
        #swagger.security = [{
            "Authorization": []
        }]
    */
    await getAll(req, res);
});

router.get("/users/:id", ensureAuthenticated, ensureAuthorized(["admin"]), async(req, res) => {

    /*
        #swagger.tags = ['Admin']
        #swagger.security = [{
            "Authorization": []
        }]
    */
    await getOne(req, res);
});

router.get("/seed", async(req, res) => { 
        //#swagger.tags = ['Admin'] 
    const admin = {
        name: "Administrator",
        email: "admin@mahbubbello.com",
        password: "Password123#"
    };

    await register(admin, "admin", res);
});

module.exports = router;