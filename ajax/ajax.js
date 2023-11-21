var request = $.ajax({
    method: "GET",
    URL: 'https://jsonplaceholder.typicode.com/posts'
}).done(console.log(request));