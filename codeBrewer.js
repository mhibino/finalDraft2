
// Create a Firepad 
// Initialize Firebase
var myFirebaseRef = new Firebase('https://torrid-heat-7360.firebaseio.com/');	      
var newUserHash = "bcde";

// Create CodeMirror
var codeMirror = CodeMirror(document.getElementById('firepad'), { lineWrapping: true, lineNumbers: true, mode: 'javascript' });
	      
// Create Firepad and activate certain features
var firepad = Firepad.fromCodeMirror(myFirebaseRef, codeMirror, { richTextToolbar: true, richTextShortcuts: true, defaultText: "Let's Code!" });

// Initialize contents.
$('#firepad').on('ready', function() {
	if (firepad.isHistoryEmpty()) {
		firepad.setText("Let's Code!");
	}
});
// Later option: Create Userlist
// Later: add formula for generating random userId

$('#firepad').on('keyup', function(event) {
	var revisedObj = {};
	revisedObj[newUserHash] = $('#firepad').val()
	myFirebaseRef.update(revisedObj);
});

myFirebaseRef.child(newUserHash).on("value", function(dataSnapshot) {
	$('#firepad').val(dataSnapshot.val());
});


	



















      

      

