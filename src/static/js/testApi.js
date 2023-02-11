window.$ = $;

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
      $("#" + id).append("failed");
      $("#" + id).append(error);
    }
  });
}
function tstCommentPost(postData) {
  const postId = postData["new_post_id"]
  console.log(postId)
  tstAPI("POST","comment/"+ postId,"commentUserPostAPI", {text:'Education Ends Poverty 2'}, tstDeletePost);
}
function tstDeletePost(postData) {
  const postId = postData["data"]["post_id"]
  console.log(postId)
  tstAPI("DELETE","post/"+ postId,"deleteUserPostAPI");
}
function tstGetFolderResource(resourceData) {
  const folderId = resourceData[0]["id"]
  console.log(resourceData)
  tstAPI("GET","resources/"+ folderId,"getResourceAPI");
}
function tstGetMilestone(user) {
  console.log(user)
  tstAPI("POST","tstGetMilestones","profile/" + user.canvasId + "/progress");
  //tstAPI("POST","profile/" + user.canvasId +"/progress/1","loginAPI", {username:'lcundiff',password: 'Password2'});
}
/**
 * Uncomment to test specific API in development only
 * This is only temporary until backend testing is setup
 */

//tstAPI("POST","signup","signupAPI", {fname: "Test", lname: "User", username:'testUserAPI', email: "tst@test.com", password: 'Password2'});
tstAPI("POST","login","loginAPI", {username:'lcundiff',password: 'Password2'},tstGetMilestone);

//tstAPI("GET","resources","getResourcesAPI",null,tstGetFolderResource);
//tstAPI("GET","announcements", "getAnnouncementsAPI");
//tstAPI("POST","post/"+ testUserID,"postUserPostAPI", {text:'Education Ends Poverty'},tstCommentPost);
//tstAPI("GET","post/"+ testUserID,"getUserPostAPI");
