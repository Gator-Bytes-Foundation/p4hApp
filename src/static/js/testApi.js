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
function tstDeletePost(postData) {
  const postId = postData["new_post_id"]
  console.log(postId)
  tstAPI("DELETE","post/"+ postId,"deleteUserPostAPI");
}

/**
 * Uncomment to test specific API in development only
 * This is only temporary until backend testing is setup
 */

//tstDeletePost({new_post_id: 11})
//tstAPI("POST","signup","signupAPI", {fname: "Test", lname: "User", username:'testUserAPI', email: "tst@test.com", password: 'Password2'});
//tstAPI("GET","resources","getResourcesAPI");
//tstAPI("POST","login","loginAPI", {username:'lcundiff',password: 'Password2'});
//tstAPI("GET","announcements", "getAnnouncementsAPI");
//tstAPI("POST","post/"+ testUserID,"postUserPostAPI", {text:'Education Ends Poverty'},tstDeletePost);
//tstAPI("GET","post/"+ testUserID,"getUserPostAPI");
