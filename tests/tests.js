var chai = require('chai');
var expect = chai.expect;
var $ = require('jquery');

var Post = require('../app/scripts/models.js').Post;
var PostView = require('../app/scripts/views.js').PostView;
require

// ##############################################
// Model Tests
// ##############################################
describe('Post', function(){

  describe('fetch', function(){
    it('should return a promise', function(){
      var promise = Post.fetch();
      expect(promise).to.respondTo('then');
    });

    it('should resolve with an array of posts', function(done){
      Post.fetch().then(function(data){
        var post = data[0];

        expect(post).to.have.property('title');
        expect(post).to.have.property('body');
        expect(post).to.have.property('_id');

        done();
      })
    });
  });

});

// ##############################################
// View Tests
// ##############################################
describe('PostView', function(){
  var view, posts;

  beforeEach(function(){
    posts = [{title: 'Cool', body: 'awesome'}];
    view = new PostView();
    console.log($('body').length);
  });

  describe('showPosts', function(){

    it('should take a post array and list them', function(){
      view.showPosts(posts);
      expect($('.posts li').length).to.equal(1);
      expect($('.posts li').first().find('h1').text()).to.equal('Cool');
      expect($('.posts li').first().find('p').text()).to.equal('awesome');
    });

  });

  <form id="blog-post">
  <input type= "text" class="blog-title"/>
  <input type= "text" class="blog-body"/>
  <input type= "submit"/>
  </form>

  describe('create post form', function(){ //Write a describe block for "create post form"
    it('should trigger a create:post event on the document with the title and body', function(done){ //Write an empty test in the describe block: it('should trigger a create:post event on the document with the title and body');
    $(document).on('create:post'), fuunction(event, blogPost){ //event object tis first thing passed in parameter

      expect(blogPost).to.have.property('title');
      expect(blogPost).to.have.property('body');

      expect(blogPost.title).to.equal('Title');
      expect(blogPost.title).to.equal('Body');


      done();
        //Then the function should call done() should happen here because the epxects need to run and it will happen when the form is submitted
    })
    
      $('blog-title').val('Title'); //[ ] Use jQuery to put text in the form inputs (even though they don't exist yet). Hint: Use $('.input-class-name').val("Title")
      $('blog-body').val('Body'); // this code is same as above view.showPosts(posts); line 49
      $('#blog-post').submit();

      //now verify it is supposed to do what it does .... Create an event listener on the document element for the create:post event. The event listener function should have an expectation (i.e. expect(...).to...) that expects an object with a title and body. Then the function should call done()
    });
  });
// ##############################################
//                    Work Tests
// ##############################################
// describe('create post form', function(){
//
  // it('should trigger a create:post event on the document with the title and body', function(done){
//
//     $(document).on('create:post', function(event, data){ //calling jquery and creating an event listener with document. I think .trigger is the same as .on but maybe .on is short cut http://api.jquery.com/trigger/ then crete posts became a
//       expect(post).to.be.an.instanceof();
//       expect(data).to.have.property('title'); //from notes above
//       expect(data).to.have.property('body');
//       done();
//     });
//
//
//
//   });
// });
