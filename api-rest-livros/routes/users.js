var express = require('express');
var router = express.Router();
let controller = require( '../controllers/user' );

router.get( '/', controller.getAllLivros );
router.get( "/:id", controller.getLivrosByID );
router.post( '/', controller.addLivro );


module.exports = router;
