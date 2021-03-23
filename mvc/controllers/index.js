

const data = require("../../data");
const postData = data.postData;
const uniqueTags = data.uniqueTags;
const categoryData = data.categoryData;

const recentPostsAmount = 6;


const getHomePage = function(req, res, next) {
  console.log("======================");
    console.log("======================");
    console.log(postData.length);
    console.log("======================");
    console.log("======================");

    const templateData = {
        title: 'Just Me - My Awesome Blog',
        posts: postData,
        active: 'index',
        categoryData: data.categoryData
    }

    res.render('index', templateData);
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

const getFilteredList = function({query}, res, next) {
    let filteredPosts = postData.filter((val) => {
        return val.category == query.category || val.tags.includes(query.tag);
    });

    const templateData = {
        title: "About Me - Filtered",
        active: query.category,
        posts: filteredPosts,
        categoryData: data.categoryData
    }
    res.render('filter', templateData);
}

module.exports = {
  getHomePage,
  getBlogPost,
  get404,
  redirect404,
  getAbout,
  getContact,
  getFilteredList
}
