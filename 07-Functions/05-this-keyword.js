/* 
    ! "this" keyword
    ? What is "this"?
    * "this" references the "Object" that is executing the current function. e.g => If that function is part of an object, we call that function a method, right.
    ! "method" So if that function is a method in an object, "this" references that object itself.
    * Otherwise if that function is a regular function which means its part of an object, "this" means the global object, which is the window object in browser and global object in NODE

    ! => method => Object
    ! => function => global(Window, Global)
*/


const video = {
    title: 'a',
    play() {
        console.log(this)
    }
};


video.play()

// ! We add a method to that object later e.g


video.stop = function () {
    console.log(this)
}

video.stop()


function Video(title) {
    this.title = title;
    console.log(this)
}

const v = new Video('a')
console.log(v)

/*
    ? What if this is a constructor function?
    * If you call a function using the "new" operator which is in case of a constructor function, "this" will reference a new //{} empty object
*/


const videoObj = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(tag => {
            console.log(this.title, tag)
        })
    }
};

videoObj.showTags()

/* 
    ? BUT what if we want to displau the title of the video next to each tag?

*/


/* 
    ! Changing The Value of "this" keyword

*/


function playVideo(a, b) {
    console.log(this)
    console.log(a + b)
}

// playVideo.call({ name: 'Smith' })
// playVideo.apply({ name: 'Smith' }, [1, 2])
// const fn = playVideo.bind({ name: 'John Smith' });
// fn()