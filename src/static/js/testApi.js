window.$ = $;
// TEMPORARY FILE //
const testUserID = 1
let tstUserPost = new Map() 
tstUserPost.set("text", "Education Ends Poverty")
tstUserPost.set("files", null)

function tstAPI(type,url,id,data=null,cb=null) {
  $.ajax({
    type: type,
    url: `/api/` + url,
    data: data,
    success: function(response) {
      console.log(response)
      if(cb) cb(response);
      $("#" + id).append("Success: ");
      $("#" + id).append(JSON.stringify(response));
    },
    error: function(xhr, status, error) {
      $("#" + id).append("Failed: ");
      $("#" + id).append(error);
    }
  });
}
/**
 * Posts
 */
function tstCommentPost(postData) {
  const postId = postData["new_post_id"]
  tstAPI("POST","comment/"+ postId,"commentUserPostAPI", {text:'Education Ends Poverty 2'}, tstDeletePost);
}
function tstDeletePost(postData) {
  const postId = postData["data"]["post_id"]
  console.log(postId)
  tstAPI("DELETE","post/"+ postId,"deleteUserPostAPI");
}
/**
 * Resources
 */
function tstGetFolderResource(resourceData) {
  const folderId = resourceData[0]["id"]
  console.log(resourceData)
  tstAPI("GET","resources/"+ folderId,"getResourceAPI");
}
/**
 * Progress milestones
 */
function tstGetMilestone(user) {
  function tstGetMilestoneFile(milestones) {
    //const fakeFile = new File([""], "filename.txt", {type: "text/plain"})
    //tstAPI("POST","profile/" + user.id + "/progress/" + milestones[0].id,"tstGetProgressMilestone");
    tstAPI("GET","profile/" + user.id + "/progress/" + milestones[0].id,"tstGetProgressMilestone");
  }
  tstAPI("GET","profile/" + user.id + "/progress","tstGetProgress", null, tstGetMilestoneFile);
}

/**
 * Uncomment calls below to test specific API in development only
 * This is only temporary until backend testing is setup
 */

tstAPI("POST","signup","signupAPI", {fname: "Test", lname: "User", username:'lcundiff', email: "tst@test.com", password: 'NF!Deku2'});
tstAPI("POST","login","loginAPI", {username:'testUserAPI',password: 'Password2'},tstGetMilestone);

tstAPI("POST","profile","editProfileAPI", {name: "Test User", school: "User", phone:'212-222-2222', email: "tst@test.com", position: 'teacher', bio: 'tst bio', location: "Haiti", files: {}});
tstAPI("GET","resources","getResourcesAPI",null,tstGetFolderResource);
tstAPI("GET","announcements", "getAnnouncementsAPI");
//tstAPI("POST","post/"+ testUserID,"postUserPostAPI", {text:'Education Ends Poverty'},tstCommentPost);
//tstAPI("GET","post/"+ testUserID,"getUserPostAPI"); not implemented
