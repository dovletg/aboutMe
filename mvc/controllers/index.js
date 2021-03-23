

const data = require("../../data");

const postData = data.postData;


const getHomePage = function(req, res) {
  res.render("index", {title: "About Me", posts: postData});
}

const getBlogPost = function({params}, res, next) {
    let post = postData.find((val) => val.id == params.postid );
    if(!post) { res.redirect("/404"); }
    const templateData = {
        title: post.title,
        post: post,
        tags: data.uniqueTags,
        recentPosts: postData.slice(0, recentPostsAmount),
        categoryData: data.categoryData
    }
    res.render('post', templateData);
}

const get404 = function(req, res, next) {
    const templateData = {
        title: "404 - I couldn't find that page...",
        tags: data.uniqueTags,
        recentPosts: postData.slice(0, recentPostsAmount),
        categoryData: data.categoryData
    }
    res.render('404', templateData);
}

const redirect404 = function(req, res, next) {
    res.redirect("/404");
}

const getAbout = function(req, res, next) {
    const templateData = {
        title: "About Me",
        active: 'about',
        categoryData: data.categoryData
    }
    res.render('about', templateData);
}

const getContact = function(req, res, next) {
    const templateData = {
        title: "Contact",
        active: 'contact',
        categoryData: data.categoryData
    }
    res.render('contact', templateData);
}

module.exports = {
  getHomePage,
  getBlogPost,
  get404,
  redirect404,
  getAbout,
  getContact
}
