

db.posts.insertOne({
    title:"my first post",
    text:"this is my first post, I hope you like it",
    tags:["new","tech"],
    creator:"ObjectId('3424234242424242')",
    comments:[{
        text:"i like this post",
        author:"ObjectId('3424242342432')"
    }]
})