(function(){App.CreateController=Em.Controller.extend({actions:{save:function(){var a;return a=this,$.ajax({url:config.base+"/create",type:"post",data:{fileName:this.fileName,fileContent:this.fileContent}}).done(function(b){return alert(b.msg),0===b.code?a.transitionToRoute("files"):void 0}).fail(function(a){return alert(a)})}}}),App.FileController=Em.ObjectController.extend({actions:{save:function(){var a,b,c;return c=this,b=this.get("fileName"),a=this.get("fileContent"),$.ajax({url:config.base+"/update",type:"post",data:{fileName:b,fileContent:a}}).done(function(a){return alert(a.msg),0===a.code?c.transitionToRoute("files"):void 0})}}}),App.FilesController=Em.ArrayController.extend({actions:{del:function(a){var b;return b=this,$.ajax({url:config.base+"/delete?name="+a.fileName+".txt",type:"delete"}).then(function(c){return alert(c.msg),0===c.code?b.removeAt(b.indexOf(a)):void 0}).fail(function(a){return alert(a)})},edit:function(a){return console.log(a)}}})}).call(this);