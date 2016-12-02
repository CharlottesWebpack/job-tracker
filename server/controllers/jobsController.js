var User = require('..models/userModel.js');

var fakeUser = {
    "_id": {
        "$oid": "58407f433586eb49e0f38fb9"
    },
    "username": "Nick",
    "password": "Nick",
    "jobList": [
        {
            "company": "facebook",
            "_id": {
                "$oid": "58407f433586eb49e0f38fba"
            },
            "interest_level": 0
        }
    ],
    "__v": 0
}

module.exports = {

addJobToDb: function(job, user) {
  user.jobList.push(job);

  user.save(function(err) {
    if(err) { console.log("Error adding job to userModel!")}
  });
};

removeJobFromDb: function() {

};

updateJobInDb: function() {};

}
