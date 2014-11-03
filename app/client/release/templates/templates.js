Ember.TEMPLATES["components/head-nav"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Files");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Create");
  }

  data.buffer.push("<div class=\"head-nav\">\r\n	<ul class=\"nav-ul\">\r\n		<li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "files", options) : helperMissing.call(depth0, "link-to", "files", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\r\n		<li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "create", options) : helperMissing.call(depth0, "link-to", "create", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\r\n	</ul>\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["create"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"create\">\r\n	<div class=\"row\">\r\n		<label>File Name:</label>\r\n	</div>\r\n	<div class=\"row\">\r\n		");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'valueBinding': ("fileName")
  },hashTypes:{'valueBinding': "ID"},hashContexts:{'valueBinding': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push(".txt\r\n	</div>\r\n	<div class=\"row\">\r\n		<label>File Content:</label>\r\n	</div>\r\n	<div class=\"row\">\r\n		");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'valueBinding': ("fileContent"),
    'rows': ("10"),
    'cols': ("50")
  },hashTypes:{'valueBinding': "ID",'rows': "STRING",'cols': "STRING"},hashContexts:{'valueBinding': depth0,'rows': depth0,'cols': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\r\n	</div>\r\n	<div class=\"row\">\r\n		<button id=\"save\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Save</button>\r\n	</div>\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["file"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"create\">\r\n	<div class=\"row\">\r\n		<label>File Name:</label>\r\n	</div>\r\n	<div class=\"row\">\r\n		<span id=\"fileName\">");
  stack1 = helpers._triageMustache.call(depth0, "fileName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\r\n	</div>\r\n	<div class=\"row\">\r\n		<label>File Content:</label>\r\n	</div>\r\n	<div class=\"row\">\r\n		");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'id': ("fileContent"),
    'valueBinding': ("fileContent"),
    'rows': ("10"),
    'cols': ("50")
  },hashTypes:{'id': "STRING",'valueBinding': "ID",'rows': "STRING",'cols': "STRING"},hashContexts:{'id': depth0,'valueBinding': depth0,'rows': depth0,'cols': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\r\n	</div>\r\n	<div class=\"row\">\r\n		<button id=\"save\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Save</button>\r\n	</div>\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["files"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n			<li><a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("model.fullPath")
  },hashTypes:{'href': "ID"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "model.fileName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(".txt</a><span class=\"delete\">-----<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "del", "model", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">Delete</button></span></li>\r\n		");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\r\n			<li>No files :(</li>\r\n		");
  }

  data.buffer.push("<div class=\"files\">\r\n	<h2>There are ");
  stack1 = helpers._triageMustache.call(depth0, "model.length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" files:</h2>\r\n	<ul>\r\n		");
  stack1 = helpers.each.call(depth0, "model", "in", "controller", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n	</ul>\r\n</div>");
  return buffer;
  
});