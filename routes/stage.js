var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/req/:stage_id/:uid', function(req, res, next) {
	var stage_id = req.params.stage_id;
	var uid = req.params.uid;
	console.log('stage_id: ', stage_id);
	console.log('uid: ', uid);

	var send = { 
		result: true, 
		error_code: '',
		total_stage_count: 10, 
		current_stage_count: parseInt(stage_id),
		top_user_name:'민호',
		left_image_url: '',
		right_image_url: '',
		hidden_points: [{x: 100, y: 150}, {x: 100, y: 150}],
		total_hidden_points: 10
	};
	res.send(JSON.stringify(send));

});

module.exports = router;
