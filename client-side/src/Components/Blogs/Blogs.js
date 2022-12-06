import React from 'react';

const Blogs = () => {
    return (
        <div className='p-24 my-12'>
            <div tabIndex={0} className=" collapse collapse-arrow my-5 border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <p> The Four Kinds of React State to Manage</p>
                    <br />
                    <p>Local state. Global state. Server state. URL state.</p>
                </div>
            </div>
            <div tabIndex={0} className=" collapse collapse-arrow my-5 border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    How does prototypical inheritance work?
                </div>
                <div className="collapse-content">
                    <p>Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function. All JavaScript objects inherit properties and methods from a prototype: Date objects inherit from Date. </p>
                </div>
            </div>
            <div tabIndex={0} className=" collapse collapse-arrow my-5 border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content">
                    <p> A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important.

                    </p>
                    <br />
                    <p>
                        They enable you to catch bugs early in the development process. Automated unit tests help a great deal with regression testing. They detect code smells in your codebase. For example, if you're having a hard time writing unit tests for a piece of code, it might be a sign that your function is too complex.
                    </p>
                </div>
            </div>
            <div tabIndex={0} className=" collapse collapse-arrow my-5 border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content">
                    <p>
                        Angular is a front-end framework with lots of components, services, and tools. On Angular’s site, you can see that they define Angular as:

                        “The modern web developer’s platform”

                        It is developed and maintained by Google developers, but curiously it is not used to implement any of their most common products such as Search or YouTube.
                    </p>
                    <br /> <br />
                    <p>
                        React is considered a UI library. They define themselves as:

                        “A JavaScript library for building user interfaces”

                        Facebook developers are behind the development and maintenance of this library. And, in this case, most of Facebook’s products are made with React.
                    </p>
                    <br /> <br />
                    <p>
                        Vue.js is, according to its site:

                        “A progressive JavaScript framework”

                        Vue.js is developed and led by Evan You, but also it counts on a huge open-source community.
                    </p>
                    <br /> <br />
                </div>
            </div>

        </div>
    );
};

export default Blogs;